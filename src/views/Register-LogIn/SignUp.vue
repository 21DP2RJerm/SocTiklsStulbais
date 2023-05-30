<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import toolbar from '/src/components/Toolbar.vue';

export default {
  setup() {
    const auth = getAuth()
    const router = useRouter()
    const handleSubmit = async e => {
      const { email, password } = e.target.elements
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value)
        router.push('/')
      } catch (e) {
        alert(e.message)
      }
    }
    return { handleSubmit }
  },
  components: {toolbar}
}
</script>

<template>
  <header>

  </header>

  <main>
    <div id="parent">
      <div id="mainContainer">
        <form @submit.prevent="handleSubmit">
          <input type="email" id="emailInput" class="usernameAndPasswordStyling" name="Email" placeholder="youremail@example.com"/>
          <input type="password" id="passwordInput" class="usernameAndPasswordStyling" name="Password" placeholder="Password"/>
          <button id="signUpButton">Sign Up</button>
          <Router-link :to="{ name: 'login' }">
            <a id="LogInInstead" class="font-small" style="text-decoration: none;">Log In instead</a>
          </Router-link>
        </form>
      </div>
    </div>
  </main>
  <toolbar>

  </toolbar>
</template>

<style>
  
</style>
