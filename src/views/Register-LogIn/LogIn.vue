<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const auth = getAuth()
    const router = useRouter()
    const handleSubmit = async e => {
      const { email, password } = e.target.elements
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
        router.push('/')
      } catch (e) {
        alert(e.message)
      }
    }
    return { handleSubmit }
  }
}
</script>

<template>
  <header>

  </header>

  <main>
    <div id="parent">
      <div id="mainContainer">
        <form @submit.prevent="handleSubmit">
          <input type="email" id="emailInput" class="usernameAndPasswordStyling" name="Email" placeholder="youremail@example.com">
          <input type="password" id="passwordInput" class="usernameAndPasswordStyling" name="Password" required minlength="8" maxlength="50" size="10" placeholder="Password">
          <button id="signUpButton">Log In</button>
          <Router-link :to="{ name: 'signup' }">
            <a id="RegisterInstead" class="font-small" style="text-decoration: none;">Register instead</a>
          </Router-link>
        </form>
      </div>
    </div>
  </main>
</template>

<style>
   
</style>