// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to handle URL check
app.post('/check-url', (req, res) => {
    const { url } = req.body;
    // Perform URL check logic here
    // For demonstration, let's just echo back the URL
    res.json({ url });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
