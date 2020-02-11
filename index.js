const {app, port} = require("./server/index");

// Usar el dotenv en la aplicacion
var dotenv = require('dotenv');
dotenv.config();

// Importar la coneccion a mongo
require("./database/index");

// Arrancar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});

