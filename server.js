const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/user', (req, res) => {
  res.json({ name: process.env.USER_NAME || 'Guest' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
