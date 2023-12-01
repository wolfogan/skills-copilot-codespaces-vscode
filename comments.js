// Create web server and listen to port 3000
const express = require('express');
const app = express();
const port = 3000;

// Import the comments module
const comments = require('./comments.js');

// Use the comments module
app.use('/comments', comments);

// Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

