// serveur avec Node sans express

const http = require("http");
const port = 3000;
const hostName = "127.0.0.1"
const server = http.createServer((req, res) => {
    res.end("Salut");
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 200;
});

server.listen(port, hostName, () => {
    console.log("Vous êtes bien sur le serveur")
})

// serveur Node avec express

const express = require("express");
const path = require("path"); // est requis path
const app = express();
const port = 3000;

// les routes app.get

app.use("/static", express.static(path.join(__dirname, 'public'))); // importer des fichiers statics

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/bonjour', (req, res) => {
    res.send("Bonjour tout le monde");
});

app.get('/fichier/html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/page.html')); // les routes vers les fichiers HTML
})

app.listen(3000, '127.0.0.1', () => {
    console.log(`Serveur lancé sur le port`);
});

//ajouter des routes dynamiques
app.get('/bonjour/:prenom', (req, res) => {
    console.log(req.params);
    const text = 'Bonjour...'
    res.send(text);
});

