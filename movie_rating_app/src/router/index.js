import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '@/views/Contact';
import AddMovie from "../views/AddMovie";
import Movie from "../views/Movie";
import Register from "../views/Register";
import Login from "../views/Login";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/movies/add',
    name: 'AddMovie',
    component: AddMovie
  },
  {
    path: '/movies/:id',
    name: 'Movie',
    component: Movie
  },
  {
    path: '/users/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/users/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history', //con esta instrucción eliminamos el uso de # en las URL
  base: process.env.BASE_URL,
  routes
})

export default router
