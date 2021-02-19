<template>
  <v-layout row wrap>
    <v-flex xs4 v-for="movie in movies" :key="movie._id">
      <v-card>
        <v-card-title primary_title>
          <div>
            <div class="headline">
              <v-btn text v-bind:to="`/movies/${movie._id}`">
                {{movie.name}}
              </v-btn>
            </div>
            <span class="grey--text">{{movie.release_year}}.{{movie.genre}}</span>
          </div>
        </v-card-title>
        <v-card-text>
          {{movie.description}}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios'; //importamos axios para realizar peticiones HTTP

export default {
  name: 'Movies',
  computed: {
    movies(){
      return this.$store.getters.fetchMovies;
    }
  },
  components: {
    HelloWorld
  },
  data: () => ({
    //movies:[] //variable usada para guardar los objetos json recibidos de las peticiones HTTP
  }),
  methods: {
    /*async fetchMovies(){
      const token = window.localStorage.getItem('auth'); //recuperamos el token que se guar en el login
      //Realizamos la peticion HTTP tipo GET
      return axios({
        method: 'get',
        url:'/movies',
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      }).then( (response) => {
        this.movies = response.data.movies; //Recuperamos los valores de nuestra variable
        this.current_user = response.data.current_user;
      }).catch( () =>{
      });
    }*/
  },
  mounted() {
    //metodo ejecutado cuando se renderiza la pagina
    //this.fetchMovies();
    this.$store.dispatch("fetchMovies");
  }
}
</script>
