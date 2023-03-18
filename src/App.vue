<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'home' }">Home|</RouterLink>
        <RouterLink :to="{ name: 'profile' }">Personal Profile|</RouterLink>
        <RouterLink :to="{ name: 'login' }">Log In|</RouterLink>
        <router-link :to="{ name: 'signup' }">Sign Up|</router-link>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
