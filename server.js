const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static assets from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/message', (req, res) => {
    res.send('Hello from Dockerized Node.js app!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
