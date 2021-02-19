<template>
  <div>
    <div class="login">
      <a class="btn facebook ml-2" href="/login/facebook">
        LOGIN WITH FACEBOOK
      </a>
      <a class="btn twitter ml-2" href="/login/twitter">
        LOGIN WITH TWITTER
      </a>
      <a class="btn google ml-2" href="/login/google">
        LOGIN WITH GOOGLE
      </a>
      <a class="btn linkedin ml-2" href="/login/linkedin">
        LOGIN WITH LINKED IN
      </a>
    </div>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-text-field label="Email" v-model="email" :rules="emailRules" required></v-text-field>
      <v-text-field label="Password" v-model="password" required></v-text-field>
      <v-btn class="ml-3" @click="submit" :disabled="!valid">submit</v-btn>
      <v-btn class="ml-3" @click="clear" :disabled="!valid">clear</v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
import bus from './../bus'

export default {
  name: "Login",
  data: () =>({
    valid: true,
    email: '',
    password: '',
    emailRules: [
      v => !!v || 'Email is required',
      v => /\S+@\S+\.\S+/.test(v) || 'E-mail must be valid'
    ],
  }),
  methods:{
    submit(){
      //definimos un request HTTP para login
      return axios({
        method: 'post',
        data: {
          email: this.email,
          password: this.password
        },
        url: '/users/login',
        headers: {'Content-Type': 'application/json'},
      }).then((response) =>{
        /*Si el inicio de login es satisfactorio, guardamos el jwt en el local storage
        y en la sesion del navegador*/
          window.localStorage.setItem('auth',response.data.token);
          this.$swal('Great!','You are ready to start!','success');
          bus.$emit('refreshUser'); //Emitimos un metodo para que pueda ser escuchado por otro componente
          this.$router.push({name:'Home'}); //redireccionamos a la pagina Home
      }).catch((error) => {
        const message = error.response.data.message;
        this.$swal('Oh oo!',`${message}`, 'error');
        this.$router.push({name: 'Login'}); //recargamos la pagina
      });
    },
    clear(){
      this.$refs.form.reset();
    }
  }
}
</script>

<style scoped>

</style>
