<script>

</script>


<template>
  <header>

  </header>

  <main>
    <div id="parent">
      <div id="mainContainer">
        <input type="email" id="emailInput" class="usernameAndPasswordStyling" name="Email" placeholder="youremail@example.com" pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required />
        <input type="text" id="usernameInput" class="usernameAndPasswordStyling" name="Username" required minlength="4" maxlength="24" size="10" placeholder="Username">
        <input type="password" id="passwordInput" class="usernameAndPasswordStyling" name="Password" required minlength="8" maxlength="50" size="10" placeholder="Password">
        <input type="password" id="passwordInputConfirm" class="usernameAndPasswordStyling" name="Password" required minlength="8" maxlength="50" size="10" placeholder="Confirm password">
        <button id="signUpButton">Sign Up</button>
      </div>
    </div>
  </main>
</template>

<style>
  body{
    background : var(--color-background);
  }
  #parent{
    display: grid;
    place-items: center;
    margin: 0;
    padding: 0;
  }

  #mainContainer{
    height: 500px;
    width: 550px;
    border-radius: 20px;
    background-color: var(--color-red);

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
  }
  #emailInput{top: 7.5rem;}
  #usernameInput{top: 11rem;}
  #passwordInput{top: 14.5rem;}
  #passwordInputConfirm{top: 18rem;}

  #signUpButton{
    height: 32px;
    width: 120px;
    border-radius: 10px;
    border: none;
    position: absolute;
    top: 25rem;
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

    #signUpButton{
      width: 160px;
      top: 33rem;
    }
  }

</style>
