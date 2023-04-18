<script>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import router from "../../router";

const email = ref("");
const password = ref("");

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!");
      router.push('/home')
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    })
}
</script>

<template>
  <header>

  </header>

  <main>
    <div id="parent">
      <div id="mainContainer">
        <input type="email" id="emailInput" class="usernameAndPasswordStyling" name="Email" placeholder="youremail@example.com" v-model="email" />
        <input type="password" id="passwordInput" class="usernameAndPasswordStyling" name="Password" placeholder="Password" v-model="password" />
        <button id="signUpButton" @click="register">Sign Up</button>
        <Router-link :to="{ name: 'login' }">
          <a id="LogInInstead" class="font-small" style="text-decoration: none;">Log In instead</a>
        </Router-link>
      </div>
    </div>
  </main>
</template>

<style>
  body{
    background : var(--color-background);
  }
  .parent{
    display: grid;
    place-items: center;
    margin: 0;
    padding: 0;
  }

  #mainContainer{
    height: 500px;
    width: 550px;
    border-radius: 20px;
    background-color: var(--color-container);

    position: relative;
    top: 200px;
    display: flex;
    justify-content: center;
  }

  .usernameAndPasswordStyling{
    padding: 8px;
    margin: 20px;
    min-width: 200px;
    height: 24px;
    border-radius: 10px;
    border: none;
    position: absolute;
    background: var(--color-inputs);
  }
  #emailInput{top: 11rem;}
  #passwordInput{top: 14.5rem;}

  #LogInInstead{
    position: absolute;
    top: 360px;
    left: 236px;
    text-decoration: none;
    color: black;
  }
  #LogInInstead:hover{
    color: blue;
  }

  #signUpButton{
    height: 32px;
    width: 120px;
    border-radius: 10px;
    border: none;
    position: absolute;
    top: 25rem;
    background: var(--color-inputs)
  }

  #signUpButton:hover{
    background: var(--color-lightyellow);
  }

  textarea:focus, input:focus{
    outline: none;
  }

  @media screen and (max-width: 608px){
    #mainContainer{
      width: 100vw;
      height: 100vh;
      border-radius: 0;
      top: 0;
      
    }
    .usernameAndPasswordStyling{
      min-width: 270px;
    }

    #emailInput{top: 12.5rem;}
    #usernameInput{top: 16rem;}
    #passwordInput{top: 19.5rem;}
    #passwordInputConfirm{top: 23rem;}

    #LogInInstead{
      top: 30rem;
      left: 39%; /*sito jasataisa normali vel */
    }

    #signUpButton{
      width: 160px;
      top: 33rem;
    }
  }

</style>
