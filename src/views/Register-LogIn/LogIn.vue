<script>

</script>

<template>
  <header>

  </header>

  <main>
    <div id="parent">
      <div id="mainContainer">
        <input type="email" id="emailInput" class="usernameAndPasswordStyling" name="Email" placeholder="youremail@example.com">
        <input type="password" id="passwordInput" class="usernameAndPasswordStyling" name="Password" required minlength="8" maxlength="50" size="10" placeholder="Password">
        <button id="signUpButton">Log In</button>
        <Router-link :to="{ name: 'signup' }">
          <a id="RegisterInstead" class="font-small" style="text-decoration: none;">Register instead</a>
        </Router-link>
      </div>
    </div>
  </main>
</template>

<style>
   
</style>