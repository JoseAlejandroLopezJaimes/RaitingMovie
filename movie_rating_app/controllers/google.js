const User = require('../models/User');
const passport = require('passport');
const config = require('./../config/Config');
const Strategy = require('passport-google-oauth20').Strategy;

module.exports.controller = (app) =>{
    passport.use(new Strategy({
        clientID: config.GOOGLE_APP_ID,
        clientSecret: config.GOOGLE_APP_SECRET,
        /*
        * Esta URL callback es la que será utilizada para
        * redireccionar despues de una transacción exitosa con google
        * */
        callbackURL: '/login/google/return'
    },
        (accessToken,refreshToken,profile,cb) =>{
        //Handle google login
            const email = profile.emails[0].value;
            User.getUserByEmail(email, (err,user) => {
                if(!user){
                    const newUser = new User({
                        fullname: profile.displayName,
                        email,facebookId: profile.id,
                    });
                    User.createUser(newUser,(error)=>{
                        if(error){
                            //Handle error
                        }
                        return cb(null,user);
                    });
                } else {
                    return cb(null,user);
                }
                return true;
            });
        }));

    /*Funciones ejecutadas cuando se recibe una función callback de google
    * Esta petición es invocada por un boton del formulario Login
    * */
    app.get('/login/google',
        passport.authenticate('google',{scope:['email']}));

    /*
    * Esta función será ejecutada por la funciń callback de google
    * */
    app.get('/login/google/return',
        passport.authenticate('google',{failureRedirect:'/login'}),
        (req,res) =>{
            res.redirect('/');
        });
};
