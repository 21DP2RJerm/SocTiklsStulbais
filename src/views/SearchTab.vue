<script>
export default {
    data(){
        return{
            userInfo: [
                { username: 'Kristzz', name: 'Krists'},
            ] 
        }
    }
}
</script>

<template>
  <main>
    <div v-for="user in userInfo" :key="user.id">
        <div class="centerParent">
            <div id="searchContainer">
                <input type="text" id="searchUser" name="SearchUsername" required minlength="4" maxlength="24" size="10" placeholder='Search someones "username"'>
                <div id="suggestions">
                    <a id="PFP" style="float: left; "><img src="src/icons/FtXgiG7WAAAaIrT.png" alt="kristaps" style="width:75px;height:75px; outline: 3px solid black;border-radius: 50%;
        position: absolute;  "></a>
                    <a  class="font-head"  style=" position: absolute; left:110px;">{{ user.username }}</a><br>
                    <a  class="font-regular" style=" position: absolute; left:110px; " >{{ user.name }}</a>
                    
                </div>
            </div>
            
        </div>
    </div>
  </main>
</template>

<style>
    
    #searchContainer{
        height: 100vh;
        width: 1100px;
        background-color: #f6e3ba;

        position: relative;
        border-radius: 10px;
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
    #suggestions{
        padding: 8px;
        margin: 20px;
        top: 50px;
        width: 700px;
        height: 70px;
        background-color: white;
        left:200px;
        position: absolute;
        border-radius: 10px;
    }


    @media screen and (max-width: 608px){
        #searchContainer{
        height: 100vh;
        width: 80%;
        background-color: #f6e3ba;

        position: relative;
        border-radius: 10px;
    }

    #searchUser{
        padding: 8px;
        margin: 20px;
        min-width: 80%;
        height: 24px;

        border-radius: 10px;
        border: none;
        position: absolute;
        left: 3%; 
    }

    .centerParent{
        display: grid;
        margin: 0;
        padding: 0;
        place-items: center;
    }
    #suggestions{
        padding: 8px;
        margin: 20px;
        top: 50px;
        width: 80%;
        height: 70px;
        background-color: white;
        left:3%;
        position: absolute;
        border-radius: 10px;
    }
    }
    
</style>