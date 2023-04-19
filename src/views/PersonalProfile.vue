<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <div class="parent">
    <div v-for="user in userInfo" :key="user.id">
      <a id="username" class="font-head">{{ user.username }}</a>
      <div id="profileabout">
        <a id="ProfileImage" ><img src="src/icons/FtXgiG7WAAAaIrT.png" alt="kristaps" ></a>
        <a id="textHeightChange" class="font-head" >{{ user.name }}</a>
        <br>
        <br>
        <a id="UserBio" class="font-regular">{{ user.bio }}</a>
      </div>
    </div>
    <br>
    <div id="profileposts">
      <div class="split one">
        
      </div>
      <div class="split two">

      </div>
      <div class="split three">

      </div>
      <div class="split four">

      </div>

    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            userInfo: [
                { username: 'Kristzz', name: 'Krists', bio: 'Armīnieks, 18 gadu vecumā ar 20 gadu stāžu dienestā, garšo mellenes, māk apieties ar datoru. Izgudroju Hyperlink un Steelseries Intel Core Threadripper 200k ', id: 1},
            ] 
        }
    }
}
</script>

<style>
  #username{
    width: 100%;
    height: 3%;
    background-color: var(--color-container);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  #profileabout{

    width: 100%;
    min-height: 37%;
    background-color: #f6e3ba;
    border-radius:30px;
    float: left;
    text-align: justify;
    position: relative;
  }
  
  #textHeightChange{
    width:100%;
    position: relative;
    font-size: 20px;
    
  }

  #ProfileImage{
    float: left;  
    margin: 10px; 
    position: relative;
    max-width: 100%;
    height: auto;
  }
  #UserBio{
    
    width: 95%; 
    position: relative;
    text-align: justify;
  }

  #profileposts{
    width: 1000px;
    min-height: 1000px;
    background-color: #ffefcb;  
  }
  
  .split{
    margin: 5px;
    width: 240px;
    height: 320px;
    background-color: white;
    float: left;
    
    
    
  }
  .parent{
    display: grid;
    place-items: center;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
    overflow-x: hidden;
    height: 100%;
    overflow-y: auto;
  }



  @media screen and (max-width: 608px){
    #username{
    width: 100%;
    height: 3%;
    background-color: var(--color-container);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  #profileabout{

    width: 100%;
    min-height: 37%;
    background-color: #f6e3ba;
    border-radius:30px;
    float: left;
    text-align: justify;
    position: relative;
  }
  
  #textHeightChange{
    width:100%;
    position: relative;
    font-size: 20px;
    
  }

  #ProfileImage{
    float: left;  
    margin: 10px; 
    position: relative;
    max-width: 100%;
    height: auto;
  }
  #UserBio{
    
    width: 95%; 
    position: relative;
    text-align: justify;
  }

  #profileposts{
    position: relative;
    width: 100%;
    min-height: 100%;
    background-color: #ffefcb;  
  }
  
  .split{
    position: relative;
    margin: 5px;
    max-width: 84px;
    max-height: 112px;
    background-color: white;
    float: left;
    
    
    
  }
  .parent{
    display: grid;
    place-items: center;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
    overflow-x: hidden;
    height: 100%;
    overflow-y: auto;
  }
  }


  
</style>