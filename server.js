const express = require('express');
const path = require('path');

const app = express();
const rootDir = path.join(__dirname);

app.use(express.static(rootDir));

app.get('/api/status', (req, res) => {
  res.json({
    app: 'CloudZone',
    status: 'ok',
    host: req.hostname,
    time: new Date().toISOString()
  });
});

app.get('/api/admin-test', (req, res) => {
  res.json({
    message: 'Admin network test endpoint is active.',
    remoteAddress: req.ip,
    userAgent: req.get('User-Agent') || 'unknown',
    timestamp: new Date().toISOString()
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(rootDir, 'index.html'));
});

const port = process.env.PORT || 10000;
const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => {
  console.log(`CloudZone server listening on http://${host}:${port}`);
});
