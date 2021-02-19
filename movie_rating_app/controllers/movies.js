const MovieSchema = require('../models/Movie.js'); //Importamos nuestro schema
const Rating = require('../models/Rating.js');
const passport = require('passport');

module.exports.controller = (app) =>{
    /*definimos un web service para recuperar todos los datos movies
    * method:get
    * url: movies
    * Este web service realizará una proyección de los campos del registro json
    * y los cargará a la variable movies
    * */
    /*app.get('/movies', passport.authenticate('jwt', { session: false },
        (req,res) => {
            MovieSchema.find({},'name description release_year genre',(error,movies) => {
                if(error) { console.log(error)}
                res.send({movies});
            });
        }),
    );*/

    app.get('/movies',(req,res) => {
        MovieSchema.find({},'name description release_year genre',(error,movies) => {
         if(error) { console.log(error)}
         res.send({movies});
        });
    });
    /* fetch a single movie
    * method: GET
    * url: /api/movies/:id
    * Realiza la búsqueda por parametros en el web service
    * */
    app.get('/movies/:id',(req,res) => {
        MovieSchema.findById(req.params.id,'name description release_year genre',
            (error,movie) => {
            if(error) {console.error(error)}
            res.send(movie);
            });
    });

    /* Rate a movie
    * method: post
    * url: /movies/rate/:id
    * */
    app.post('/movies/rate/:id',(req,res) =>{
       const rating = new Rating({
         movie_id: req.params.id,
         user_id: req.body.user_id,
         rate:  req.body.rate
       })

        rating.save(function (error,rating){
            if(error) { console.log(error);}

            res.send({
                movie_id: rating.movie_id,
                user_id: rating.user_id,
                rate: rating.rate
            })
        })
    });

    /*definicmos un web service para agregar movie
    * method: post
    * url: /movie
    * params: name,description,release_year, genre
    * */
    app.post('/movies',(req,res) => {
        /*Cargamos el schema con los parametros contenidos del req*/
        const  newMovie = new MovieSchema({
            name: req.body.name,
            description: req.body.description,
            release_year: req.body.release_year,
            genre: req.body.genre,
        });
        /*Invocamos el servicio para crear el documento Movie.json en MongoDB*/
        newMovie.save((error,movie) => {
            if(error) { console.log(error)}
            res.send(movie);
        });
    });
};
