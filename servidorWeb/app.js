const express = require('express');
const path = require('path');
const app = express();

app.listen(3030, () => console.log('Pagina Inicilizada'));
// Archivos Html
app.get('/index', (req, res) => res.sendFile(path.join(__dirname, './DH-Heroes/views/index.html')));
app.get('/babbage', (req, res) => res.sendFile(path.join(__dirname, './DH-Heroes/views/babbage.html')));
app.get('/berners-lee', (req, res) => res.sendFile(path.join(__dirname, './DH-Heroes/views/berners-lee.html')));
app.get('/clarke', (req, res) => res.sendFile(path.join(__dirname, './DH-Heroes/views/clarke.html')));
app.get('/hamilton', (req, res) => res.sendFile(path.join(__dirname, './DH-Heroes/views/hamilton.html')));
app.get('/hopper', (req, res) => res.sendFile(path.join(__dirname, './DH-Heroes/views/hopper.html')));
app.get('/loveleace', (req, res) => res.sendFile(path.join(__dirname, './DH-Heroes/views/loveleace.html')));
app.get('/turing', (req, res) => res.sendFile(path.join(__dirname, './DH-Heroes/views/turing.html')));

// Archivos CSS
app.get('/css', (req, res) => res.sendFile(path.join(__dirname, './DH-Heroes/public/css/style.css')));
// archivos PNG
app.get('/img', (req, res) => res.sendFile(path.join(__dirname, './DH-Heroes/public/img/archivos.png')));
