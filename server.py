from flask import Flask, jsonify, send_from_directory
import os

app = Flask(__name__, static_folder='.', static_url_path='')
root_dir = os.path.abspath(os.path.dirname(__file__))

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
        'remoteAddress': '',
        'userAgent': '',
        'timestamp': os.environ.get('TIMESTAMP', '') or '',
    })

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    target = os.path.join(root_dir, path)
    if path and os.path.isfile(target):
        return send_from_directory(root_dir, path, cache_timeout=31536000)
    return send_from_directory(root_dir, 'index.html', cache_timeout=0)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 10000))
    host = os.environ.get('HOST', '0.0.0.0')
    app.run(host=host, port=port, threaded=True)
