// Conexion con MongoDB
const mongoose = require("mongoose");

// Definir el URI de nuestro mongo con usuario + password de la db
var db_url = process.env.db_URI;

// Conexion a Mongo mediante el metodo mongoose.connect()
mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(!err) {
        console.log("Conexion exitosa a MongoDB");
    } else {
        console.log(`No se pudo conectar a MongoDb`);
    }
});
// ----------------------------
