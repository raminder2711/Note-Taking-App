// index.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const notesRoutes = require('./routes/notes');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/notes', notesRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
