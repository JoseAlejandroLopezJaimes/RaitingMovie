const User = require('../models/User.js');

const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken'); //inicializamos jwt

const ExtractJwt = passportJWT.ExtractJwt;
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'thisisthesecretkey';

const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');

module.exports.controller = (app) => {
    //local strategy, es utilizado para la autenticacilocal de un usuario
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },(email,password,done) =>{
        User.getUserByEmail(email,(err,user)=>{
            if(err) { return done(err);}
            if(!user) {return done(null,false)}

            User.comparePassword(password,user.password,(error,isMatch)=>{
                if(isMatch){
                    return done(null,user);
                }
                return done(null,false);
            });
            return true;
        });
    }));

    //HTTP para registrar un usuario
    app.post('/users/register',(req,res) =>{
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        //Creamos un modelo usuario con los datos enviados en la request HTTP
        const newUser = new User({
            name,email,password
        });

        /*El modelo llama a su metodo create user, el cual manda un objeto JSON y una función callback
        * esta función realiza la función de encriptar el password
        * */
        User.createUser(newUser,(error,user) =>{
            if(error) {
                //Mensaje de error mostrado cuando hay un error al insertar en la DB
                res.status(422).json({message: 'Something went wrong. Please try again after some time!'});
            }
            res.send({user});
        });
    });
    //login a user
    app.post('/users/login',
        passport.authenticate('local',{failureRedirect: '/users/login'}),
        (req,res) => {
            res.redirect('/');
        });

    passport.serializeUser((user,done) =>{
        done(null,user.id);
    });

    passport.deserializeUser((id,done)=>{
        User.findById(id,(err,user)=>{
            done(err,user);
        });
    });

    /*app.post('/users/login',(req,res) => {
       if(req.body.email && req.body.password) { //validamos si existen datos para validación en la petición HTTP
            const email = req.body.email;
            const password = req.body.password;
           //Ejecutamos el metodo definido en el modelo, es una consulta de mongo a usuarios por email
            User.getUserByEmail( email,(err,user) => {
               if(!user){ //si el usuario no se encuentra registrado, mandamos un status 404
                   res.status(404).json({message:'The user does not exist!'});
               } else {
                   //Validamos si el password proporcionado con el password del usuario
                   User.comparePassword( password,user.password,(error,isMatch) =>
                   {
                       if(error) throw error;
                       if(isMatch){ //es el resultado de la compración de password con el de la base
                           const payload = {id:user.id}; //guardamos el id del usuario
                           const token = jwt.sign(payload,jwtOptions.secretOrKey); //guardamos el key secret
                           res.json({message:'ok',token}); //regresamos la respuesta
                       } else {
                           //regresamos la respuesta como error de validación
                           res.status(401).json({message:'Te password is incorrect!'});
                       }
                   });
               }
            });
        }
    });*/
};
