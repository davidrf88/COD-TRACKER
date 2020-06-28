<template>
  <div class="container">
      <h1>Login Page</h1>
      <label>User</label>
     <input type="text" v-model="user"  >
     <label>password</label>
     <input type="password" v-model="password" >
      <button v-on:click.prevent="greet">LogIn</button>
      <button v-on:click.prevent="greet2">Greet</button>

  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {

    data (){
        return {
            user:"",
            password:""
        }
    },
     methods: {
       ...mapGetters(['user/GetState', ]),
       ...mapActions(['user/login']),


    greet: function () {
      this.$store.dispatch('user/login',{ username:this.user, password:this.password }).then((dcdtkn) =>{ 

alert(dcdtkn)

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
