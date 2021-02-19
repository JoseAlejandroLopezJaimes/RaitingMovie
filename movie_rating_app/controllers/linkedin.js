const User = require('../models/User.js');
const passport = require('passport');
const config = require('./../config/Config');
const Strategy = require('passport-linkedin').Strategy;

module.exports.controller = (app) => {
    //linkedin strategy
    passport.use(new Strategy({
        consumerKey: config.LINKEDIN_APP_ID,
        consumerSecret: config.LINKEDIN_APP_SECRET,
        //URL ejecutada despues de login satisfactoriamente
        callbackURL: '/login/linkedin/return',
        profileFields: ['id','first-name','last-name','email-address']
    },
        (accessToken,refreshToken,profile,cb)=>{
        //Handle linkedin login
            const email = profile.emails[0].value;
            User.getUserByEmail(email,(err,user) =>{
                if(!user){
                    const newUser = new User({
                        fullname: profile.displayName,
                        email: profile.emails[0].value,
                        facebookId: profile.id
                    });
                    User.createUser(newUser,(error) =>{
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

    //URL ejecutada desde el formulario login
    app.get('/login/linkedin',passport.authenticate('linkedin'));

    //URL que sera invocada por la función callbacl definida en el objeto Strategy
    //que se encuentra en la parte superior
    app.get('/login/linkedin/return',
        passport.authenticate('linkedin',{failureRedirect: '/login'}),
        (req,res) =>{
            res.redirect('/');
        });
};
