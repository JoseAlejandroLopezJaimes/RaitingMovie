(function(e){function t(t){for(var r,i,o=t[0],l=t[1],c=t[2],u=0,m=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},s={app:0},n=[];function i(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6a76a6ff"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=s[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=s[e]=[t,r]}));t.push(a[2]=r);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e);var c=new Error;n=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=s[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",c.name="ChunkLoadError",c.type=r,c.request=n,a[1](c)}s[e]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("ab8b");var r=a("5f5b"),s=a("14ba"),n=a.n(s),i=a("2b0e"),o=a("ce5b"),l=a.n(o),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("router-link",{staticClass:"side_bar_link",attrs:{to:{name:"Home"}}},[a("v-list-item",[a("v-list-item-action",[a("v-icon",[e._v("home")])],1),a("v-list-item-content",[e._v("Home")])],1)],1),a("router-link",{staticClass:"side_bar_link",attrs:{to:{name:"Contact"}}},[a("v-list-item",[a("v-list-item-action",[a("v-icon",[e._v("contact_mail")])],1),a("v-list-item-content",[e._v("Contact")])],1)],1)],1)],1),a("v-main",[a("v-app-bar",{attrs:{color:"indigo",dark:"",fixed:"",app:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",[e._v("Home")]),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[e.current_user?a("v-btn",{attrs:{id:"add_movie_link",text:"",to:{name:"AddMovie"}}},[e._v(" Add Movie ")]):e._e(),e.current_user?a("v-btn",{attrs:{id:"user_email",text:""}},[e._v(" "+e._s(e.current_user.email)+" ")]):e._e(),e.current_user?e._e():a("v-btn",{attrs:{text:"",to:{name:"Register"},id:"register_btn"}},[e._v(" Register ")]),e.current_user?e._e():a("v-btn",{attrs:{text:"",to:{name:"Login"},id:"login_btn"}},[e._v(" Login ")]),e.current_user?a("v-btn",{attrs:{id:"logout_btn",text:""},on:{click:e.logout}},[e._v("Logout")]):e._e()],1)],1),a("v-container",{attrs:{fluid:""}},[a("div",{attrs:{id:"app"}},[a("router-view")],1)])],1),a("v-footer",{attrs:{color:"indigo",app:""}},[a("span",{staticClass:"text-white"},[e._v("© 2018")])])],1)},u=[],d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" Hello World ")])},m=[],v={name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},p=v,f=a("2877"),h=Object(f["a"])(p,d,m,!1,null,null,null),b=h.exports;a("7692");const _=new i["default"];var g=_,y=a("bc3a"),x=a.n(y),w={name:"App",props:{source:String},data:()=>({drawer:!1,current_user:null}),methods:{listenToEvents(){g.$on("refreshUser",()=>{this.fetchUser()})},async fetchUser(){return x()({method:"get",url:"/api/current_user"}).then(e=>{this.current_user=e.data.current_user}).catch(()=>{})},logout(){return x()({method:"get",url:"/api/logout"}).then(()=>{g.$emit("refreshUser"),this.$router.push({name:"Home"})}).catch(()=>{})}},mounted(){this.fetchUser(),this.listenToEvents()}},k=w,V=a("6544"),C=a.n(V),$=a("7496"),O=a("40dc"),j=a("5bc1"),M=a("8336"),T=a("a523"),E=a("553a"),L=a("132d"),I=a("8860"),S=a("da13"),q=a("1800"),R=a("5d23"),A=a("f6c4"),H=a("f774"),P=a("2fa4"),F=a("2a7f"),G=Object(f["a"])(k,c,u,!1,null,null,null),N=G.exports;C()(G,{VApp:$["a"],VAppBar:O["a"],VAppBarNavIcon:j["a"],VBtn:M["a"],VContainer:T["a"],VFooter:E["a"],VIcon:L["a"],VList:I["a"],VListItem:S["a"],VListItemAction:q["a"],VListItemContent:R["a"],VMain:A["a"],VNavigationDrawer:H["a"],VSpacer:P["a"],VToolbarItems:F["a"],VToolbarTitle:F["b"]});var B=a("8c4f"),D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},e._l(e.movies,(function(t){return a("v-flex",{key:t._id,attrs:{xs4:""}},[a("v-card",[a("v-card-title",{attrs:{primary_title:""}},[a("div",[a("div",{staticClass:"headline"},[a("v-btn",{attrs:{text:"",to:"/movies/"+t._id}},[e._v(" "+e._s(t.name)+" ")])],1),a("span",{staticClass:"grey--text"},[e._v(e._s(t.release_year)+"."+e._s(t.genre))])])]),a("v-card-text",[e._v(" "+e._s(t.description)+" ")])],1)],1)})),1)},W=[],U={name:"Movies",computed:{movies(){return this.$store.getters.fetchMovies}},components:{HelloWorld:b},data:()=>({}),methods:{},mounted(){this.$store.dispatch("fetchMovies")}},z=U,Y=a("b0af"),J=a("99d9"),K=a("0e8f"),Q=a("a722"),X=Object(f["a"])(z,D,W,!1,null,null,null),Z=X.exports;C()(X,{VBtn:M["a"],VCard:Y["a"],VCardText:J["a"],VCardTitle:J["b"],VFlex:K["a"],VLayout:Q["a"]});var ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",[e._v(" this is contact ")])},te=[],ae={name:"Contact"},re=ae,se=Object(f["a"])(re,ee,te,!1,null,"419e238a",null),ne=se.exports;C()(se,{VLayout:Q["a"]});var ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{label:"Movie Name",rules:e.nameRules,required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-textarea",{attrs:{name:"input-7-1",label:"Movie Description"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),a("v-select",{attrs:{label:"Movie Release Year",items:e.years,required:"",rules:e.releaseRules},model:{value:e.release_year,callback:function(t){e.release_year=t},expression:"release_year"}}),a("v-text-field",{attrs:{label:"Movie Genre",required:"",rules:e.genreRules},model:{value:e.genre,callback:function(t){e.genre=t},expression:"genre"}}),a("v-btn",{staticStyle:{margin:"15px"},attrs:{disabled:!e.valid},on:{click:e.submit}},[e._v(" Submit ")]),a("v-btn",{on:{click:e.clear}},[e._v(" Clear ")])],1)},oe=[],le={name:"AddMovie",data:()=>({valid:!0,name:"",description:"",genre:"",release_year:"",nameRules:[e=>!!e||"Movie names is required"],genreRules:[e=>!!e||"Movie genre is required",e=>e&&e.length<=80||"Genre must be less tan equal to 80 characters."],releaseRules:[e=>!!e||"Movie release year is required"],select:null,years:["2018","2017","2016","2015"]}),methods:{submit(){if(this.$refs.form.validate()){const e={name:this.name,description:this.description,release_year:this.release_year,genre:this.genre};this.$store.dispatch("addMovie",e),this.$refs.form.reset(),this.$router.push({name:"Home"})}return!0},clear(){this.$refs.form.reset()}}},ce=le,ue=a("4bd4"),de=a("b974"),me=a("8654"),ve=a("a844"),pe=Object(f["a"])(ce,ie,oe,!1,null,"7ce5942e",null),fe=pe.exports;C()(pe,{VBtn:M["a"],VForm:ue["a"],VSelect:de["a"],VTextField:me["a"],VTextarea:ve["a"]});var he=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs4:""}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[e._v(e._s(e.movie.name))]),a("span",{staticClass:"grey--text"},[e._v(e._s(e.movie.release_year)+"."+e._s(e.movie.genre))])])]),a("h6",{staticClass:"card-title",on:{click:e.rate}},[e._v("Rate this movie")]),a("v-card-text",[e._v(" "+e._s(e.movie.description)+" ")])],1)],1)],1)},be=[],_e=a("5b3d"),ge=a.n(_e);const ye=document.createElement("div"),xe={note:0},we=i["default"].extend({data(){return{rating:0}},watch:{rating(e){xe.note=e}},template:'<div class="rating">How was your experience getting help with this issues?\n      <star-rating v-model="rating" :show-rating="false"></star-rating>\n    </div>',components:{"star-rating":ge.a}}),ke=(new we).$mount(ye);var Ve={name:"Movie",data(){return{movie:[]}},methods:{async rate(){this.$swal({content:ke.$el,buttons:{confirm:{value:0}}}).then(()=>{const e=this.$route.params.id;return x()({method:"post",data:{rate:xe.note},url:"http://localhost:8081/movies/rate/"+e,headers:{"Content-Type":"application/json"}}).then(()=>{this.$swal("Thank you for rating! "+xe.note,"success")}).catch(e=>{const t=e.response.data.message;this.$swal("Oh oo!",""+t,"error")})})},async fetchMovie(){return x()({method:"get",url:"http://localhost:8081/api/movies/"+this.$route.params.id}).then(e=>{this.movie=e.data}).catch(()=>{})}},mounted(){this.fetchMovie()}},Ce=Ve,$e=Object(f["a"])(Ce,he,be,!1,null,"0e2f5a2c",null),Oe=$e.exports;C()($e,{VCard:Y["a"],VCardText:J["a"],VCardTitle:J["b"],VFlex:K["a"],VLayout:Q["a"]});var je=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{attrs:{label:"Email",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{label:"Password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-text-field",{attrs:{name:"input-7-1",label:"Confirm Password"},model:{value:e.confirm_password,callback:function(t){e.confirm_password=t},expression:"confirm_password"}}),a("v-btn",{staticClass:"m-2",attrs:{disabled:!e.valid},on:{click:e.submit}},[e._v(" Submit ")]),a("v-btn",{on:{click:e.clear}},[e._v(" Clear ")])],1)},Me=[],Te={name:"Register",data:()=>({valid:!0,name:"",email:"",password:"",confirm_password:"",emailRules:[e=>!!e||"Email is required",e=>/\S+@\S+\.\S+/.test(e)||"E-mail must be valid"]}),methods:{async submit(){if(this.$refs.form.validate())return x()({method:"post",data:{name:this.name,email:this.email,password:this.password},url:"/users/register",headers:{"Content-Type":"application/json"}}).then(()=>{this.$swal("Great","You have successfully registered","success"),this.$router.push({name:"Login"})}).catch(e=>{const t=e.response.data.message;this.$swal("Oh oo!",""+t,"error")})},clear(){this.$refs.form.reset()}}},Ee=Te,Le=Object(f["a"])(Ee,je,Me,!1,null,"40c02a6a",null),Ie=Le.exports;C()(Le,{VBtn:M["a"],VForm:ue["a"],VTextField:me["a"]});var Se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{label:"Email",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{label:"Password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-btn",{staticClass:"ml-3",attrs:{disabled:!e.valid},on:{click:e.submit}},[e._v("submit")]),a("v-btn",{staticClass:"ml-3",attrs:{disabled:!e.valid},on:{click:e.clear}},[e._v("clear")])],1)],1)},qe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("a",{staticClass:"btn facebook ml-2",attrs:{href:"/login/facebook"}},[e._v(" LOGIN WITH FACEBOOK ")]),a("a",{staticClass:"btn twitter ml-2",attrs:{href:"/login/twitter"}},[e._v(" LOGIN WITH TWITTER ")]),a("a",{staticClass:"btn google ml-2",attrs:{href:"/login/google"}},[e._v(" LOGIN WITH GOOGLE ")]),a("a",{staticClass:"btn linkedin ml-2",attrs:{href:"/login/linkedin"}},[e._v(" LOGIN WITH LINKED IN ")])])}],Re={name:"Login",data:()=>({valid:!0,email:"",password:"",emailRules:[e=>!!e||"Email is required",e=>/\S+@\S+\.\S+/.test(e)||"E-mail must be valid"]}),methods:{submit(){return x()({method:"post",data:{email:this.email,password:this.password},url:"/users/login",headers:{"Content-Type":"application/json"}}).then(e=>{window.localStorage.setItem("auth",e.data.token),this.$swal("Great!","You are ready to start!","success"),g.$emit("refreshUser"),this.$router.push({name:"Home"})}).catch(e=>{const t=e.response.data.message;this.$swal("Oh oo!",""+t,"error"),this.$router.push({name:"Login"})})},clear(){this.$refs.form.reset()}}},Ae=Re,He=Object(f["a"])(Ae,Se,qe,!1,null,"3e840cc6",null),Pe=He.exports;C()(He,{VBtn:M["a"],VForm:ue["a"],VTextField:me["a"]}),i["default"].use(B["a"]);const Fe=[{path:"/",name:"Home",component:Z},{path:"/contact",name:"Contact",component:ne},{path:"/movies/add",name:"AddMovie",component:fe},{path:"/movies/:id",name:"Movie",component:Oe},{path:"/users/register",name:"Register",component:Ie},{path:"/users/login",name:"Login",component:Pe},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Ge=new B["a"]({mode:"history",base:"/",routes:Fe});var Ne=Ge,Be=a("2f62");i["default"].use(Be["a"]);var De=new Be["a"].Store({state:{movies:[]},mutations:{ADD_MOVIE:(e,t)=>{e.movies.unshift(t)},MOVIES:(e,t)=>{e.movies=t}},getters:{fetchMovies:e=>e.movies},actions:{addMovie:(e,t)=>x()({method:"post",data:t,url:"/movies",headers:{"Content-Type":"application/json"}}).then(t=>{e.commit("ADD_MOVIE",t.data),(void 0).$swal("Great","Movie added successfully","success")}).catch(()=>{(void 0).$swal("Oh oo!","Could not add the movie!","error")}),fetchMovies:(e,t)=>{x()({method:"get",url:"/movies"}).then(t=>{e.commit("MOVIES",t.data.movies)}).catch(()=>{})}},modules:{}}),We=a("f309");i["default"].use(We["a"]);var Ue=new We["a"]({});i["default"].config.productionTip=!1,i["default"].use(r["a"]),i["default"].use(l.a),i["default"].use(n.a),new i["default"]({router:Ne,store:De,vuetify:Ue,render:function(e){return e(N)}}).$mount("#app")},7692:function(e,t,a){}});
//# sourceMappingURL=app.6889658a.js.map