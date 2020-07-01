<template>
<div>
    <h2>Login Component</h2>
    <button  v-on:click.prevent="this.$auth.loginWith('google')"  >login</button>

    <a  @click="$auth.loginWith('google')">Sign In</a>
    

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

   // this.$auth.loginWith('auth0')

},

     methods: {
       ...mapGetters(['user/GetState', ]),
       ...mapActions(['user/login']),


    logInF: function () {
     alert('send Data');
    
    }


  }

}
</script>