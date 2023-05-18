// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", 'text/plain');
//     res.end("Hello world!");
// });

// server.listen(3000, '127.0.0.1', () => {
//     console.log("hello!")
// });

// const http = require("http");
// const server = http.createServer((res, req) => {
//     res.end("Hello");
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain")
// });

// server.listen(3000, '127.0.0.1', () => {
//     console.log("Merci");
// });

// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.end("Hello world");
//     res.statusCode = 200;
//     res.setHeader("Content-type", "text/plain")
// });

// server.listen(3000, "127.0.0.1", () => {
//     console.log("Merci")
// });


// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.end("hello world");
//     res.setHeader("Content-Type", "text/plain")
// });

// server.listen(3000, "127.0.0.1", () => {
//     console.log("merci");
// });

// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.end("merci à vous");
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain")
// });

// server.listen(3000, "127.0.0.1", () => {
//     console.log("Merci");
// })


//créer un server avec Node

// const http = require("http");
// const server = http.createServer((res, req) => {
//     res.end("Merci d'être connecté");
// });

// server.listen(3000, process.env.PORT, "127.0.0.1", () => {
//     console.log("vous êtes connecté au serveur");
// });

// // créer un serveur avec express
// const port = "3000";
// const express = require("express");
// const app = express();
// const path = require('path');

// // les middlewares
// app.use('', (req, res, next) => {
//     res.send("Merci à vous");
//     next();
// });
// app.use('', (req, res) => {
//     res.json(message = "merci");
//     next();
// });

// // le port du réseau
// app.listen(port, process.env.PORT, "127.0.0.1", () => {
//     console.log("je suis connecté");
// });

// // créer une route vers une page HTML
// app.get("", (req, res) => {
//     res.sendFile(path.join(__dirname,))
// });

// //créer une route vers un fichier static (une image);
// app.use('/static', express.static('public'));

// //implementation du CORS (Cross, origin, ressources, sharing)
// app.use((res, req, next) => {
//     res.setHeader("Access-Control-Allow-Origin, *");
//     res.setHeader("Access-Control-Allow-Headers, ")
//     res.setHeader("Access-Control-Allow-Methods,")
// })


// //creation d'un serveur avec Node JS

// const hostname = "127.0.0.1";
// const port = 3000;
// const http = require("http");
// const serveur = http.createServer((req, res) => {
//     res.end("Bonjour");
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
// });

// serveur.listen(port, hostname, () => {
//     console.log("le serveur tourne");
// });

// //creation d'un serveur avec express

// const express = require("express");
// const app = express();
// const path = require("path");
// const port = 3000;
// const hostName = '127.0.0.1';

// app.listen(port, hostName, () => {
//     console.log("le serveur tourne");
// })

// app.use((req, res, next) => {
//     res.send("Merci à vous");
//     next();
// });

// // réponse vers un fichier HTML
// app.get('', (req, res, next) => {
//     res.sendFile(path.join(__dirname, ""));
//     next();
// });

// //réponse faire un fichier statique
// app.use('', express.static("le nom du fichier"));

// //création d'un CORS ( cross, origin, research, sharing)
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", '');
//     res.setHeader("Access-Control-Allow-Method", '');
//     res.setHeader("Access-Control-Allow-Headers", '');
//     next();
// });

// //obtenir le body
// app.use(express.json());

// app.use((req, res, next) => {
//     console.log(req.body);
//     res.status(201).json({ message: "Objet crée !" });
// })