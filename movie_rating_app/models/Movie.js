const mongoose = require('mongoose');
const Schema = mongoose.Schema;  //Importamos la función schema para moder crear schemas

/*Definimos el Schema para nuestro objeto JSON Movie*/
const MovieSchema = new Schema({
    name: String,
    description: String,
    release_year: Number,
    genre: String,
});

/*Creamos un modelo y le asignamos nuestro schema definido*/
const Movie = mongoose.model('Movie', MovieSchema)

/*Exportamos el modelo para que pueda ser usado en toda la aplicación*/
module.exports = Movie;
