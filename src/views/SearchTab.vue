<script>
export default {
    setup() {
        
    },
}
</script>

<template>
  <main>
    <div class="centerParent">
        <input type="text" id="searchUser" name="SearchUsername" required minlength="4" maxlength="24" size="10" placeholder='Search someones "username"'>
    </div>
  </main>
</template>

<style>
    #searchUser{
        padding: 8px;
        width: 500px;
        height: 24px;

        border-radius: 10px;
        border: none;
        position: relative;

        background: var(--color-inputs);
    }

    .centerParent{
        display: grid;
        margin: 0;
        padding: 0;
        place-items: center;
    }

    @media screen and (max-width: 608px)  {
        #searchUser{
            width: 92vw;
        }
    }
</style>