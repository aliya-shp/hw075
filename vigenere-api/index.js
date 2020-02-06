const express = require('express');
const bodyParser = require('body-parser');
const Vigenere = require('caesar-salad').Vigenere;
const cors = require('cors');

const app = express();

const port = 8000;

const urlencoded = bodyParser.urlencoded({extended: false});

app.use(cors());
app.use(express.json());

app.post('/encode', urlencoded, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    console.log('encode', req.body);
    res.send(Vigenere.Cipher(req.params.password).crypt(req.params.encoded));
});

app.post('/decode', urlencoded, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    console.log('decode', req.body);
    res.send(Vigenere.Decipher(req.params.password).crypt(req.params.decoded));
});

app.listen(port, () => {
    console.log('Ciphering/deciphering in process');
});