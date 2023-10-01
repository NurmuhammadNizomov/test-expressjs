// Import Express
const express = require('express');

// Create Express app
const app = express();

// Hello World route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server on port 300
app.listen(3000, () => {
  console.log('App listening on port 300');
});