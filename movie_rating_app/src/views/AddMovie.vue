<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field label="Movie Name" v-model="name" :rules="nameRules" required></v-text-field>
    <v-textarea name="input-7-1" label="Movie Description" v-model="description" ></v-textarea>
    <v-select label="Movie Release Year"
       v-model="release_year" :items="years" required :rules="releaseRules">
    </v-select>
    <v-text-field label="Movie Genre" v-model="genre" required :rules="genreRules"></v-text-field>
    <v-btn style="margin: 15px" @click="submit" :disabled="!valid">
      Submit
    </v-btn>
    <v-btn @click="clear">
      Clear
    </v-btn>
  </v-form>
</template>

<script>
import axios from 'axios';

export default {
name: "AddMovie",
  data: () =>({
    valid:true,
    name:'',
    description:'',
    genre:'',
    release_year:'',
    nameRules: [ v => !!v || 'Movie names is required'],
    genreRules: [
        v => !!v || 'Movie genre is required',
        v => (v && v.length <=80) || 'Genre must be less tan equal to 80 characters.'
    ],
    releaseRules: [
        v => !!v || 'Movie release year is required'
    ],
    select: null,
    years: ['2018','2017','2016','2015']
  }),
  methods: {
    submit(){
      if(this.$refs.form.validate()){
        const movie = {
          name: this.name,
          description: this.description,
          release_year: this.release_year,
          genre: this.genre
        }

        this.$store.dispatch("addMovie",movie);
        this.$refs.form.reset();
        this.$router.push({name: 'Home'});
        //realizamos la petición HTTP con las propiedades de configuración
       /* return axios({
          method: 'post',
          data: {
            name: this.name,
            description: this.description,
            release_year: this.release_year,
            genre: this.genre
          },
          url: '/movies',
          headers:{
            'Content-Type': 'application/json',
          },
        }).then( () => {
          //Mensaje de despliegue swal
          this.$swal('Great!',
            'Movie added sucessfully!',
              'success'
          );
          //Cuand la petición HTTP se completa redireccionamos a homepage
          this.$router.push({name: 'Home'});
          this.$refs.form.reset();
        }).catch(() =>{
          this.$swal(
              'Oh oo',
              'Could not add the movie',
              'error'
          );
        });*/
      }
      return  true;
    },
    clear(){
      this.$refs.form.reset();
    }
  }
}
</script>

<style scoped>

</style>
