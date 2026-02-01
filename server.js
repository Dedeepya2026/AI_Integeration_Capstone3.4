const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  const ext = path.extname(req.path);
  if (ext) return res.sendFile(path.join(__dirname, req.path));
  const file = path.join(__dirname, req.path === '/' ? 'index.html' : req.path + '.html');
  res.sendFile(file, (err) => {
    if (err) res.sendFile(path.join(__dirname, 'index.html'));
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
