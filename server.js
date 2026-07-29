const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.static('public'));

app.get('/api/user', (req, res) => {
  res.json({ username: process.env.USER_NAME || 'User' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
