<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-tt-tracker
      </h1>
      <div class="links">
        <nuxt-link to="/user/login" > Login </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth:true
}
</script>

<style>
</style>
