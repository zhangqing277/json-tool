const express = require('express');
const path = require('path');
const app = express();
const PORT = 3007;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/healthz', (req, res) => {
  res.json({ status: 'ok', service: 'json-tool' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`JSON Tool listening on 0.0.0.0:${PORT}`);
});
