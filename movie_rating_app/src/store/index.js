import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    ADD_MOVIE: (state,payload) =>{
      state.movies.unshift(payload);
    },
    //metodo utilizado para cambiar el estado de las variables del state
    MOVIES: (state,payload) => {
      state.movies = payload;
    }
  },
  getters: {
    fetchMovies: state => state.movies,
  },
  actions: {
    addMovie: (context,payload) =>{
      return axios({
        method: 'post',
        data:payload,
        url: '/movies',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((response) =>{
        context.commit("ADD_MOVIE",response.data);
        this.$swal('Great','Movie added successfully','success');
      }).catch(()=>{
        this.$swal('Oh oo!','Could not add the movie!','error');
      });
    },
    //petición a la base de datos URL axios
    fetchMovies:(context,payload) =>{
      axios({
        method: 'get',
        url: '/movies'
      }).then((response)=>{
        context.commit("MOVIES",response.data.movies);
      }).catch(() =>{});
    },
  },
  modules: {
  }
})
