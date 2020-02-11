// Servidor en express
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

// BODY PARSER
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// import CORS
const cors = require("cors");
app.use(cors());


// Importar el modelo Pelicula
const Pelicula = require("../models/Pelicula");

// CRUD
app.get("/", (req, res) => {
  res.send("SERVER");
});

// ---- Obtener todos los objetos en la coleccion peliculas
app.get("/peliculas", (req, res) => {
  Pelicula.find()
    .then(item => res.status(200).send({ mensaje: "Get exitoso", res: item }))
    .catch(err => res.send("Error en get"));
});

// ---- Obtener una pelicula segun su ID
app.get("/peliculas/:id", (req, res) => {
  Pelicula.findById(req.params.id)
    .then(item => {
      item
        ? res.status(200).send({ mensaje: "GetById exitoso", res: item })
        : res.status(404).send({ mensaje: "No Encontrado", res: item });
    })
    .catch(err => res.status(409).send("Error en getById"));
});

// ----- Crear un objeto pelicula y guardar en db
app.post("/crear/pelicula", (req, res) => {
  console.log(req.body);
  const nuevaPelicula = new Pelicula(req.body);
  nuevaPelicula.save((err, pelicula) => {
    return err
      ? res.status(400).send("Hay un error")
      : res.status(200).send({ mensaje: "Pelicula creada", res: pelicula });
  });
});

// ---- Encontrar y Actualizar el objeto en db
app.put("/update/pelicula/:id", (req, res) => {
  const idPelicula = req.params.id;
  // Metodo Find id + update
  Pelicula.findByIdAndUpdate(idPelicula, { $set: req.body }, { new: true })
    .then(UpdatePelicula => res.status(200).send(UpdatePelicula))
    .catch(UpdatePelicula => res.status(400).send(UpdatePelicula));
});

// ---- Encontrar y remover objetos
app.delete("/borrar/pelicula/:id", (req, res) => {
  Pelicula.findByIdAndRemove(req.params.id)
    .then(DeletePelicula => res.status(200).send(DeletePelicula))
    .catch(DeletePelicula => res.status(400).send(DeletePelicula));
});



module.exports = { app, port };
