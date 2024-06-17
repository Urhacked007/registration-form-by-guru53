// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle registration form submission
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Perform any processing here (e.g., store data in database)
  // For now, just log the received data
  console.log(`Received registration request for username: ${username}, password: ${password}`);

  // Send a response back to the client
  res.send('Registration successful!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
