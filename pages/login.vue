<template>
  <div class="container">
      <h1>Login Page</h1>
      <div v-if=" $auth.loggedIn">ItsLogin </div>
      <div v-if=" !$auth.loggedIn">NotLogin </div>
      <login></login>
  

  </div>
</template>

<script >
import login from '~/components/user/login.vue'

export default {
   components: {
    login
  }

}
</script>

<style>
</style>
