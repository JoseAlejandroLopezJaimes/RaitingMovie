<template>
  <v-layout row wrap>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{movie.name}}</div>
            <span class="grey--text">{{movie.release_year}}.{{movie.genre}}</span>
          </div>
        </v-card-title>
        <h6 class="card-title"  @click="rate">Rate this movie</h6>
        <v-card-text>
          {{movie.description}}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios  from "axios";
import Vue from 'vue';

import StarRating from 'vue-star-rating';

//creamos un elemnto HTML div
const wrapper = document.createElement('div');
//state, usado para compartir datos entre componentes
const state = {
  note: 0
};
//Creamos un componente para mostrar contenido
const RatingComponent = Vue.extend({
  data(){
    return { rating: 0};
  },
  watch: {
    rating(newVal) { state.note = newVal;}
  },
  template: `<div class="rating">How was your experience getting help with this issues?
      <star-rating v-model="rating" :show-rating="false"></star-rating>
    </div>`,
  components: {'star-rating':StarRating}
});

//Montamos nuestro componente en elemento  HTML wrapper
const component = new RatingComponent().$mount(wrapper);

export default {
  name: "Movie",
  data(){
    return {
      movie:[]
    };
  },
  methods: {
    async rate() {
      this.$swal({
        //Cuando damos click en el elemento Rate this movie se mostrará el componente
        //donde se encuentra el start-rating
        content: component.$el,
        buttons:{
          confirm: {
            value: 0
          }
        }
        /*Cuando en el primer mensaje damos click en OK, entonces ejecutamos una
        *petición axios para guardarla en la base
        */
      }).then( ()=> {
        const movieId = this.$route.params.id;
        return axios({
          method: 'post',
          data: {
            rate: state.note,
          },
          url: `http://localhost:8081/movies/rate/${movieId}`,
          headers: {
            'Content-Type': 'application/json',
          }
          //Cuando la peticion axios es completada mandamos un mensaje de información
        }).then(()=>{
          this.$swal(`Thank you for rating! ${state.note}`, 'success');
        }).catch((error)=>{ //en caso de error, la información será mostrada en un mensaje
          const message = error.response.data.message;
          this.$swal('Oh oo!', `${message}`, 'error');
        });
      });
    },
    async fetchMovie(){
      return axios({
        method: 'get',
        url: `http://localhost:8081/api/movies/${this.$route.params.id}`,
      }).then((response) => {
        this.movie = response.data;
      }).catch(() => {
      })
    }
  },
  mounted() {
    this.fetchMovie();
  }
}
</script>

<style scoped>

</style>
