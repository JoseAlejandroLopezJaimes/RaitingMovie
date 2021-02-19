const User = require('../models/User.js');
const passport = require('passport');
const config = require('./../config/Config.js');
const Strategy = require('passport-facebook').Strategy; //Importamos el facebook strategy

module.exports.controller = (app) =>{
    //facebook strategy
    passport.use(new Strategy({
        clientID: config.FACEBOOK_APP_ID,
        clientSecret: config.FACEBOOK_APP_SECRET,
        /*
        * Esta url es la que nosotros queremos para nuestra aplicación para despues de la
        * transacción exitosa de facebook
        * */
        callbackURL: '/login/facebook/return',
        profileFields: ['id','displayName','email']
        /*
        * Esta función toma los siguientes parametros
        * */
    }, (accessToken,refreshToken,profile,cb) =>{
        //Handle facebook login
        console.log('Datos:',profile)
        //const email = profile.emails[0].value;
        const email = profile.username;
        //Hacemos la consulta en nuestra base de datos
        User.getUserByEmail(email,(err,user) =>{
            if(!user){
                /*
                * Si el usuario no existe en nuestra  base de datos y eslogged
                * por facebook, este será creado en nuestra base de datos con
                * la informaciń proveida por facebook
                * */
                const newUser = new User({
                    fullname: profile.displayName,
                    email,
                    facebookId: profile.id
                });

                User.createUser(newUser,(error) =>{
                    if(error){
                        //Handle error
                    }
                    return cb(null,user);
                });
            } else {
                //Cuando el usuario existe y es loggeado correctamente en facebook
                //solo se ejecuta la función callbackk
                return cb(null,user);
            }
            return true;
        });
    }));

    /*
    * Routes agregadas para cuando demos click en el boton login y
    * recibamos la función callback de facebook
    *
    * Esta route será ejecutada cuando se de click en button Login
    * que se encuentra en el componente Login.js
    * */
    app.get('/login/facebook',
        passport.authenticate('facebook',{sope:['email']}));

    app.get('/login/facebook/return',
        passport.authenticate('facebook',{failureRedirect:'/login'}),
        (req,res) =>{
            res.redirect('/');
        });
};
