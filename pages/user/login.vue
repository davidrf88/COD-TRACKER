<template>
  <div class="container">
      <h1>Login Page</h1>
      <label>User</label>
     <input type="text" v-model="user"  >
     <label>password</label>
     <input type="password" v-model="password" >
      <button v-on:click.prevent="greet">LogIn</button>
      <button v-on:click.prevent="greet2">Greet</button>
      <script>
        var firebase = require('firebase');
var firebaseui = require('firebaseui');

        function test(){
          
 var firebaseConfig = {
    apiKey: "AIzaSyBLlVLP9aPNlNdZjgD-sOHs6J5WVW7S9F8",
    authDomain: "sleeplesssoldiers-7e7ba.firebaseapp.com",
    databaseURL: "https://sleeplesssoldiers-7e7ba.firebaseio.com",
    projectId: "sleeplesssoldiers-7e7ba",
    storageBucket: "sleeplesssoldiers-7e7ba.appspot.com",
    messagingSenderId: "753921021030",
    appId: "1:753921021030:web:51ffedacbb7437061b49a7",
    measurementId: "G-P95LPBH07V"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  //firebase.analytics();


        }

        </script>

  </div>
</template>

<script >
import { mapMutations, mapGetters, mapActions } from 'vuex'




export default {

    data (){
        return {
            user:"",
            password:""
        }
    },

mounted: function () {

xx();

},

     methods: {
       ...mapGetters(['user/GetState', ]),
       ...mapActions(['user/login']),


    greet: function () {
      this.$store.dispatch('user/login',{ username:this.user, password:this.password }).then(() =>{ 

      });
      alert();
    },

        greet2: function () {
      var va = this.$store.getters['user/GetState']
      console.log(va);
      alert(va);
    },

  }

}
</script>

<style>
</style>
