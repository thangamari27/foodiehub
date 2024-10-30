const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS

// Create connection to MySQL database
const db = mysql.createConnection({
    host: 'bges74etvhdy50hdhw3u-mysql.services.clever-cloud.com',  // Change this to your MySQL host
    user: 'ujga2rwk1ljwyjyx',       // Your MySQL user
    password: 'd8xW3zx8L2Pdw3ap0SXG',       // Your MySQL password
    database: 'bges74etvhdy50hdhw3u',
    port: 3306 // Your MySQL database name
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// API to get products
app.get('/api/products', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});