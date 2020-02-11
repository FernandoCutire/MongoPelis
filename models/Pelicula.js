const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const peliculaSchema = new Schema({
  titulo: { type: String, required: true },
  duracion: { type: Number, required: true },
  sinopsis: { type: String, required: false },
  year: { type: Number, required: false },
  genero: { type: String, required: true },
  uploadDate: {type: Date, default: Date.now},
  directores: {
    director: [
      {
        name: String,
        edad: { type: Number, require: false },
        nacionalidad: { type: String, require: true }
      }
    ]
  }
});

// Modelo Pelicula
// const Pelicula = mongoose.model("Pelicula", peliculaSchema);

// Exportar el modelo pelicula
module.exports = mongoose.model("Pelicula", peliculaSchema);;
