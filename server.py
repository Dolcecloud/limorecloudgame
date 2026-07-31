from flask import Flask, jsonify, send_from_directory, request
import os
import json

app = Flask(__name__, static_folder='.', static_url_path='')
root_dir = os.path.abspath(os.path.dirname(__file__))
USER_STORE = os.path.join(root_dir, 'users.json')


def load_users():
    if not os.path.isfile(USER_STORE):
        return []
    try:
        with open(USER_STORE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception:
        return []


def save_users(users):
    with open(USER_STORE, 'w', encoding='utf-8') as f:
        json.dump(users, f, ensure_ascii=False, indent=2)


@app.route('/api/status')
def status():
    return jsonify({
        'app': 'CloudZone',
        'status': 'ok',
        'host': os.environ.get('HOST', '0.0.0.0'),
        'time': os.environ.get('TIMEZONE', '') or '',
    })


@app.route('/api/admin-test')
def admin_test():
    return jsonify({
        'message': 'Admin network test endpoint is active.',
        'remoteAddress': request.remote_addr or '',
        'userAgent': request.headers.get('User-Agent', ''),
        'timestamp': os.environ.get('TIMESTAMP', '') or '',
    })


@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(load_users())


@app.route('/api/users', methods=['PUT'])
def put_users():
    try:
        payload = request.get_json(force=True)
        users = payload.get('users', [])
        if not isinstance(users, list):
            return jsonify({'error': 'Invalid users payload'}), 400
        save_users(users)
        return jsonify({'status': 'ok'})
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/api/users', methods=['POST'])
def post_user():
    try:
        user = request.get_json(force=True)
        if not isinstance(user, dict):
            return jsonify({'error': 'Invalid user payload'}), 400
        users = load_users()
        users.append(user)
        save_users(users)
        return jsonify(user)
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/api/users/<email>', methods=['PUT'])
def put_user(email):
    try:
        payload = request.get_json(force=True)
        users = load_users()
        updated = []
        found = False
        for user in users:
            if user.get('email', '').lower() == email.lower():
                user.update(payload)
                found = True
            updated.append(user)
        if not found:
            return jsonify({'error': 'User not found'}), 404
        save_users(updated)
        return jsonify({'status': 'ok'})
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/api/users/<email>', methods=['DELETE'])
def delete_user(email):
    try:
        users = load_users()
        filtered = [user for user in users if user.get('email', '').lower() != email.lower()]
        save_users(filtered)
        return jsonify({'status': 'ok'})
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    target = os.path.join(root_dir, path)
    if path and os.path.isfile(target):
        cache_age = 0 if path.endswith(('.html', '.json')) else 31536000
        return send_from_directory(root_dir, path, max_age=cache_age)
    return send_from_directory(root_dir, 'index.html', max_age=0)


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 10000))
    host = os.environ.get('HOST', '0.0.0.0')
    app.run(host=host, port=port, threaded=True)
