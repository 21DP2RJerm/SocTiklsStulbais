<script>

</script>

<template>
  <header>

  </header>

  <main>
    <div id="parent">
      <div id="mainContainer">
        <input type="email" id="emailInput" class="usernameAndPasswordStyling" name="Email" placeholder="youremail@example.com"/>
        <input type="password" id="passwordInput" class="usernameAndPasswordStyling" name="Password" placeholder="Password"/>
        <button id="signUpButton">Sign Up</button>
        <Router-link :to="{ name: 'login' }">
          <a id="LogInInstead" class="font-small" style="text-decoration: none;">Log In instead</a>
        </Router-link>
      </div>
    </div>
  </main>
</template>

<style>
  
</style>
