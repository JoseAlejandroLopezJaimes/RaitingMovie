<template>
  <!---
  Los componentes
  -v-app-bar y v-footer
  Soportan una propiedad llamada app. Esta propiedad le dice a Vuetify que el
  componente correspondiente es parte de la aplicación.
  -<v-navigation-drawer fixed v-model="drawer" app>
  -<v-footer color="indigo" app>
  --->
  <v-app id="inspire"><!--Componente raiz de la aplicación-->
    <v-navigation-drawer fixed v-model="drawer" app>
      <v-list dense>
        <router-link v-bind:to="{name:'Home'}" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>home</v-icon>
            </v-list-item-action>
            <v-list-item-content>Home</v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link v-bind:to="{name:'Contact'}" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>contact_mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>Contact</v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <!--
      Es la parte donde se estará renderizan los componentes,
      como no se especifico el tag <v-main> tomara la pagina entera.
      Esto parte corresponde al Header de la página
      -->
      <v-app-bar color="indigo" dark fixed app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Home</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn id="add_movie_link" text v-bind:to="{name: 'AddMovie'}"
            v-if="current_user">
            Add Movie
          </v-btn>
          <v-btn id="user_email" text v-if="current_user">
            {{current_user.email}}
          </v-btn>
          <v-btn text v-bind:to="{name:'Register'}" v-if="!current_user" id="register_btn">
              Register
          </v-btn>
          <v-btn text v-bind:to="{name:'Login'}" v-if="!current_user" id="login_btn">
              Login
          </v-btn>
          <v-btn id="logout_btn" text v-if="current_user" @click="logout">Logout</v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <v-container fluid>
        <div id="app">
          <!--Es la raiz del contenido de nuestra aplicación,
          dentro de esta se renderizarán los componentes del routerview-->
          <router-view/>
        </div>
      </v-container>
    </v-main>

    <!---
    Esta parte corresponde al footer de la aplicación que será
    visible en todos los componentes que sean renderizados
    -->
    <v-footer color="indigo" app>
      <span class="text-white">&copy; 2018</span>
    </v-footer>
    <!--v-main>
    </v-main-->
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import './assets/stylesheets/main.css';
import bus from './bus';
import axios from 'axios';


export default {
  name: 'App',
  props: {source: String},
  data: () => ({
    drawer: false,
    current_user: null
  }),
  methods: {
    listenToEvents(){
      bus.$on('refreshUser',() =>{
        this.fetchUser(); //obtiene la información del usuario registrado
      });
    },
    async fetchUser(){
      return axios({
        method: 'get',
        url: '/api/current_user'
      }).then((response) =>{
        this.current_user = response.data.current_user;
      }).catch(()=>{
      })
    },
    logout(){
      return axios({
        method: 'get',
        url: '/api/logout'
      }).then(() =>{
        bus.$emit('refreshUser');
        this.$router.push({name: 'Home'});
      }).catch(()=>{});
    }
  },
  mounted() { //metodos ejecutados cuanado se monta el compoente
    this.fetchUser();
    this.listenToEvents(); //escuchador de eventos inicializdo para hacer el refresh de un usuar
  }

};
</script>
