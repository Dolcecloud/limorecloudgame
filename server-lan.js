const express = require('express');
const path = require('path');

const app = express();
const rootDir = path.join(__dirname);

app.use(express.static(rootDir));

app.get('/api/lan-test', (req, res) => {
  res.json({
    message: 'LAN server is running for admin testing.',
    remoteAddress: req.ip,
    host: req.hostname,
    timestamp: new Date().toISOString()
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(rootDir, 'index.html'));
});

const port = 8080;
const host = '0.0.0.0';

app.listen(port, host, () => {
  console.log(`CloudZone LAN server listening on http://${host}:${port}`);
  console.log('Use this address from local network devices to test admin access.');
});
