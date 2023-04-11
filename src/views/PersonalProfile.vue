<template>
  <div class="parent">
    <div v-for="user in userInfo" :key="user.id">
      <a id="username" class="font-head">{{ user.username }}</a>
      <div id="profileabout">
        <a id="ProfileImage" style="float: left; "><img src="src/icons/FtXgiG7WAAAaIrT.png" alt="kristaps" style="width:300px;height:400px; outline: 3px solid white; margin: 10px;"></a>
        <a id="textHeightChange" class="font-head"  style="float: left; " >{{ user.name }}</a><br>
        <a class="font-regular" style="float: left; width: 680px; ">{{ user.bio }}</a>
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
    width: 1000px;
    height: 30px;
    background-color: var(--color-container);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #profileabout{
    width: 1000px;
    min-height: 400px;
    background-color: #f6e3ba;
    border-radius:30px;
    float: left;
    text-align: justify;
  }
  #profileposts{
    width: 1000px;
    min-height: 1000px;
    background-color: #ffefcb;
    
  }
  #textHeightChange{
    
    font-size: 20px;
  }
  
  .split{
    margin: 5px;
    width: 240px;
    height: 320px;
    background-color: white;
    float: left;
    
    
  }
  
</style>