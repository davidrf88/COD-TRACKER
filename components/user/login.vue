<template>
<div>
    <h2>Login Component</h2>
    

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

    this.$auth.loginWith('auth0')

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