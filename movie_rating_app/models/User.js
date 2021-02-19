const mongoose = require('mongoose'); //utilizado para asignar un esquema a un modelo en mongo
const Schema = mongoose.Schema;
const bcryptjs = require('bcryptjs');//libreria utilizada para encriptar contraseñas en mongo

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User',UserSchema); //Creamos un modelo y le asignamos un esquema
module.exports = User; //instrucción para exportar nuestro modelo
/*
* Creamos un metodo para nuestro melo
* El metodo toma el objeto user y convierte su password en un password encriptado y lo guarda en la base de datos
* */
module.exports.createUser = (newUser,callback) => {
    bcryptjs.genSalt(10, (err,salt) => { //función utilizada para encriptar una cadena
        bcryptjs.hash(newUser.password,salt,(error,hash)=>{
            //store the hashed password
            const newUserResource = newUser;
            newUserResource.password = hash; //instruccion en donde se asigna la cadena encriptada
            newUserResource.save(callback); //Guardamos los datos e invocamos la función callback enviada desde el controller users.js
        })
    });
};

//Consulta a la base de datos para recuperar aun usuario de la db por su email
module.exports.getUserByEmail = (email,callback) => {
    const query = {email};
    User.findOne(query,callback); //consulta a la base de datos por email, y ejecuta la función callback enviada desde el controlador users.js
};

/*
* Este metodo toma los siguientes datos
* candidatePasswored: el cual fue el ingresado en el formulario
* hash: el cual es el encriptado guardado previamente en la base de datos
* callback: función  que va hacer llamada una ve que se haga la comparación de hash
* */
module.exports.comparePassword = (candidatePassword,hash,callback) =>{
    bcryptjs.compare(candidatePassword,hash,(err,isMatch) =>{
       if(err) {
           throw err;
       }
       //La variable isMatch contendrá el valor de la validación
       callback(null,isMatch);
    });
}
