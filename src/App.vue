<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
          <Router-Link :to="{ name: 'home' }">Home|</Router-Link>
          <Router-Link :to="{ name: 'profile' }">Personal Profile|</Router-Link>
          <Router-Link :to="{ name: 'login' }">Log In|</Router-Link>
          <Router-link :to="{ name: 'signup' }">Sign Up|</Router-link>
          <Router-link :to="{ name: 'search' }">Search|</Router-link>
          <Router-link :to="{ name: 'Chess' }">Chess|</Router-link>        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>

</style>
