const express = require('express');

const path = require('path');

const publicPath = path.join(__dirname, '../public');

app = express();

app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log("Server Started on Port 3000");
});