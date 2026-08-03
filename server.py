from flask import Flask, jsonify, send_from_directory, request
import requests
import os
import json

app = Flask(__name__, static_folder='.', static_url_path='')
root_dir = os.path.abspath(os.path.dirname(__file__))
USER_STORE = os.path.join(root_dir, 'users.json')
NOTIF_STORE = os.path.join(root_dir, 'notifications.json')
PACKAGES_STORE = os.path.join(root_dir, 'packages.json')
SETTINGS_STORE = os.path.join(root_dir, 'settings.json')


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


def load_notifications():
    if not os.path.isfile(NOTIF_STORE):
        return []
    try:
        with open(NOTIF_STORE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception:
        return []


def save_notifications(notifs):
    with open(NOTIF_STORE, 'w', encoding='utf-8') as f:
        json.dump(notifs, f, ensure_ascii=False, indent=2)


def load_packages():
    if not os.path.isfile(PACKAGES_STORE):
        # default two packages
        return [
            { 'id': 'pkg1', 'name': '云端电脑 1', 'price': '99000', 'label': '99.000đ / 9 ngày' },
            { 'id': 'pkg2', 'name': '云端电脑 2', 'price': '470000', 'label': '470.000đ' }
        ]
    try:
        with open(PACKAGES_STORE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception:
        return []


def save_packages(pkgs):
    with open(PACKAGES_STORE, 'w', encoding='utf-8') as f:
        json.dump(pkgs, f, ensure_ascii=False, indent=2)


def load_settings():
    if not os.path.isfile(SETTINGS_STORE):
        return {}
    try:
        with open(SETTINGS_STORE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception:
        return {}


def save_settings(settings):
    with open(SETTINGS_STORE, 'w', encoding='utf-8') as f:
        json.dump(settings, f, ensure_ascii=False, indent=2)


@app.route('/api/status')
def status():
    return jsonify({
        'app': 'CloudZone',
        'status': 'ok',
        'host': os.environ.get('HOST', '0.0.0.0'),
        'time': os.environ.get('TIMEZONE', '') or '',
    })


@app.after_request
def set_security_headers(response):
    # Content Security Policy (relatively permissive for this app)
    csp = "default-src 'self' https:; img-src 'self' data: https:; script-src 'self' https://cdnjs.cloudflare.com; style-src 'self' https://cdnjs.cloudflare.com 'unsafe-inline';"
    response.headers['Content-Security-Policy'] = csp
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['Referrer-Policy'] = 'no-referrer-when-downgrade'
    response.headers['X-Frame-Options'] = 'DENY'
    # HSTS - only effective on HTTPS; safe to send but has effect when served over TLS
    response.headers['Strict-Transport-Security'] = 'max-age=63072000; includeSubDomains; preload'
    return response


@app.route('/api/admin-test')
def admin_test():
    country = request.headers.get('CF-IPCountry') or request.headers.get('X-Country') or request.headers.get('X-AppEngine-Country') or 'Unknown'
    return jsonify({
        'message': 'Admin network test endpoint is active.',
        'remoteAddress': request.remote_addr or '',
        'userAgent': request.headers.get('User-Agent', ''),
        'country': country,
        'timestamp': os.environ.get('TIMESTAMP', '') or '',
    })


@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(load_users())


@app.route('/api/notifications', methods=['GET'])
def get_notifications():
    try:
        notifs = load_notifications()
        # return newest first
        return jsonify(list(reversed(notifs)))
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/api/notifications', methods=['POST'])
def post_notification():
    try:
        payload = request.get_json(force=True)
        if not isinstance(payload, dict):
            return jsonify({'error': 'Invalid payload'}), 400
        notifs = load_notifications()
        notifs.append(payload)
        save_notifications(notifs)
        return jsonify({'status': 'ok'})
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/api/packages', methods=['GET'])
def get_packages():
    try:
        pkgs = load_packages()
        return jsonify(pkgs)
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/api/packages', methods=['PUT'])
def put_packages():
    try:
        payload = request.get_json(force=True)
        pkgs = payload.get('packages') if isinstance(payload, dict) else None
        if not isinstance(pkgs, list):
            return jsonify({'error': 'Invalid packages payload'}), 400
        save_packages(pkgs)
        return jsonify({'status': 'ok'})
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/api/maintenance', methods=['GET'])
def get_maintenance():
    try:
        settings = load_settings() or {}
        return jsonify({ 'maintenance': bool(settings.get('maintenance', False)) })
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/api/maintenance', methods=['PUT'])
def put_maintenance():
    try:
        payload = request.get_json(force=True)
        if not isinstance(payload, dict) or 'maintenance' not in payload:
            return jsonify({'error': 'Invalid payload'}), 400
        settings = load_settings() or {}
        settings['maintenance'] = bool(payload.get('maintenance'))
        save_settings(settings)
        return jsonify({'status': 'ok', 'maintenance': settings['maintenance']})
    except Exception as e:
        return jsonify({'error': str(e)}), 400


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
        # capture remote IP and resolve country (ISO2)
        remote_ip = request.headers.get('X-Forwarded-For', request.remote_addr) or ''
        country = 'Unknown'
        try:
            if remote_ip:
                # use ipapi.co for a lightweight lookup
                resp = requests.get(f'https://ipapi.co/{remote_ip}/country/', timeout=3)
                if resp.status_code == 200:
                    country = resp.text.strip() or 'Unknown'
        except Exception:
            country = 'Unknown'

        user_record = dict(user)
        user_record['ip'] = remote_ip
        user_record['country'] = country
        users = load_users()
        users.append(user_record)
        save_users(users)
        # do not leak sensitive data unnecessarily; return safe user info
        safe_user = {k: user_record.get(k) for k in ['email', 'name', 'ip', 'country'] if k in user_record}
        return jsonify(safe_user)
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
