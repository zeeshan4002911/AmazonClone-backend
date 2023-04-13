const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express();

app.use(require('cors')());
app.use(express.json());

const productData = require('./dafaultData/productData.ts');

app.get('/products', (req, res) => {
    return res.json({
        status: "Success",
        data: productData
    })
})

app.get('*', (req, res) => {
    return res.status(200).sendFile(path.join( __dirname, 'views', 'help.html'));
})

PORT = process.env.PORT | 3001;
app.listen(PORT, () => console.log("server is running on", PORT))