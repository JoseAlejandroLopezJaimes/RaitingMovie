const express = require('express'); //Importamos librerias del servidor express
const bodyParser = require('body-parser'); //Utilizado para el parser de las peticiones HTTP
const mongoose = require('mongoose'); //Utilizado para agregar el modelado de los documentos json de MOngo
const cors = require('cors'); //Utilizado para el manejo del cross-origin de las peticiones HTTP
const morgan = require('morgan'); //Utilizado para el logger de las peticiones http
const fs = require('fs');
const session = require('express-session'); //Utilizado para guardar u objeto usuario en la sessión
const config = require('./config/Config');
const passport = require('passport'); //utilizado para autenticar las peticiones HTTP
const serveStatic = require('serve-static'); //Es utilizado para que Node pueda proveernos archivos de forma estatica
const history = require('connect-history-api-fallback');



//elementos utilizados para la configuración de strategy passport-jwt
/*
const jwt = require('jsonwebtoken'); //utilizado para usar JSON Web Token
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;//Es utilizado para obtener los datos del payload del token jwt
const JwtStrategy = passportJWT.Strategy;
const jwtOptions = {}; //es utilizaxa para establecer las configuraciones de autenticación e ingresar a los datos del payload

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'movieratingapplicationsecretkey'; //key secret utilizada ara registrar los payloads en cualquier petición
*/
const app = express(); //creamos la instancia de nuesto servidor express
const router = express.Router(); //Utilizado para definir nuestras URL HTTP

app.use(morgan('combined')); //establecemos el logger
app.use(bodyParser.json());
app.use(cors()); //agregamos el cross-origin

//configuración utilizada para guardar la session
app.use(session({
    secret: config.SECRET, //token de seguridad guardado en un archivo externo
    resave: true,
    saveUninitialized: true,
    cookie: {httpOnly:false}
}))

app.use(passport.initialize()); //Utilizado para inicializar passport en nuestra aplicación y usar JWT
app.use(passport.session()); //agregamos la configuración de la session al metodo de autenticación


//connect to mongodb,se tiene que levantar el server de base de datos de MongoDB
mongoose.connect(/*'mongodb://localhost/movie_rating_app'*/config.DB, function() {
    console.log('Connection has been made');
}).catch(err => {
    console.error('App starting error:', err.stack);
    process.exit(1);
});

//Instrucciones para agregar nuestro URL de los controladores al server backend
fs.readdirSync("controllers").forEach( function (file){
    if(file.substr(-3) == ".js") { //cargamos los archivos js del directorio
        const route = require("./controllers/"+file);//cargamos los paths HTTP a nuestro server backend
        route.controller(app);
    }
})

app.use(history())
app.use(serveStatic(__dirname+"/dist"))


/*
* Este metodo GET es utilizado para obtener los datos actuales de un
* usuario loged in
* */
router.get('/api/current_user',isLoggedIn,function (req,res){
    if(req.user){
        res.send({current_user: req.user});
    } else {
        res.status(403).send({success:false,msg:'Unauthorized.'});
    }
})

/*
* Metodo middleware
* Valida si los datos de un usario estan ya registrados en la session
* */
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
    console.log('error! auth failed');
}

/*
* Metodo utiliada para cerrar y destruir la session de un usuario
* */
router.get('/api/logout',function (req,res){
    req.logout();
    res.send();
});

//Definismo una URL raiz para validar que nuestro server Express esta en funcionamiento
/*
* Method: GET
* res: respuesta de la petición HTTP
* */
router.get('/', function(req, res) {
    res.json({ message: 'API Initialized!'});
});

const port = process.env.API_PORT || 8081; //Establecemos el puerto sobre el cual estará corriendo el server
app.use('/', router);
var server = app.listen(port, function() {
    console.log(`api running on port ${port}`);
});

module.exports = server;

