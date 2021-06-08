const express = require('express');
const app = express();
const port = 3030;
const path = require('path');
const views = path.join(__dirname, 'views');

app.listen(port, () => console.log("servidor corriendo en el puerto 3030"));
app.use(express.static('public'));

app.get('/', (req,res) => res.sendFile(path.join(views,'index.html')));
app.get('/queen', (req,res) => res.sendFile(path.join(views,'queen.html')));
app.get('/bonjovi', (req,res) => res.sendFile(path.join(views,'bonjovi.html')));
app.get('/therollingstones', (req,res) => res.sendFile(path.join(views,'therollingstones.html')));
app.get('/pinkfloyd', (req,res) => res.sendFile(path.join(views,'pinkfloyd.html')));
app.get('/creedenceclearwaterrevival', (req,res) => res.sendFile(path.join(views,'creedenceclearwaterrevival.html')));
app.get('/thedoors', (req,res) => res.sendFile(path.join(views,'thedoors.html')));
app.get('/elvispresley', (req,res) => res.sendFile(path.join(views,'elvispresley.html')));
app.get('/ledzeppelin', (req,res) => res.sendFile(path.join(views,'ledzeppelin.html')));
app.get('/thebeatles', (req,res) => res.sendFile(path.join(views,'thebeatles.html')));
app.get('/gunsnroses', (req,res) => res.sendFile(path.join(views,'gunsnroses.html')));

