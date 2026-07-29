require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/user', (req, res) => {
  res.json({ username: process.env.USER_NAME });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
