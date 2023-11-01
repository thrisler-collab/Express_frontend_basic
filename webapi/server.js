const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors')
app.use(cors())

// statt der Datenbank, lokale Daten
let products = [{id: 1, name: 'Apple'}, {id: 2, name: 'Banana'}];

// Endpoint: http://localhost:3000/
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Endpoint: http://localhost:3000/products
app.get('/products', (req, res) => {
    res.json(products);
});

// Endpoint: http://localhost:3000/products/1
// Endpoint: http://localhost:3000/products/2
app.get('/products/:id', (req, res) => {
    res.json(products.filter(p => p.id == req.params.id));
});

// Endpoint: http://localhost:3000/quadrat?zahl=3
app.get('/quadrat', (req, res) => {
    let zahl = req.query.zahl;
    console.log(zahl);
    let response = {state: 'undefined', result: 'undefined', message: 'undefined'};
    if(zahl <= 1000) {
        response.state = 'Ok';
        response.result = zahl * zahl;
        response.message = 'Zahl Ok';
    } else {
        response.state = 'Error';
        response.zahl = zahl;
        response.message = 'Zahl zu gross, nur kleiner 1000';
    }
    res.json(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


