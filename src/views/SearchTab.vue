<script>
export default {
    setup() {
        
    },
}
</script>

<template>
  <main>
    <div class="centerParent">
        <div id="searchContainer">
            <input type="text" id="searchUser" name="SearchUsername" required minlength="4" maxlength="24" size="10" placeholder='Search someones "username"'>
        </div>
    </div>
  </main>
</template>

<style>
    #searchContainer{
        height: 100vh;
        width: 1100px;
        background-color: var(--color-red);

        position: relative;
    }

    #searchUser{
        padding: 8px;
        margin: 20px;
        min-width: 700px;
        height: 24px;

        border-radius: 10px;
        border: none;
        position: absolute;
        left: 200px; 
    }

    .centerParent{
        display: grid;
        margin: 0;
        padding: 0;
        place-items: center;
    }
</style>