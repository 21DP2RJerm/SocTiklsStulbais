<script>
import toolbar from '/src/components/Toolbar.vue';

export default {
  name: "TitleComponent",
  data() {
    return {
      showTitle: false,
      fadeIn: false,
      title: "Checkmate"
    };
  },
  mounted() {
    setTimeout(() => {
      this.showTitle = true;
      this.fadeIn = true;
    }, 500);
  },

  components: {toolbar}
}


</script>

<template>
  <main>
  

    <div class="title-container" v-if="showTitle">
      <h1 class="title sticky" :class="{ 'fade-in': fadeIn }" >{{ title }}</h1>    
    </div>


    <div id="posts">

      <div class = "userPad">
        <div class="userPosts" id="1">

            <div class="userNameBorder" id="1">
                <img src="src/icons/FtXgiG7WAAAaIrT.png" class = "userProfilePic">
                <a href="https://www.youtube.com/watch?v=0Gkhol2Q1og" class="userName">username</a>
            </div>

            <div class = "userUploadFrame">
              <img src="src/icons/userPost.jpg" class = "userUpload">
            </div>
            
        </div>

        <div class="userComments" id="1">
          <div id="pogas">
            <button type="button" class="button"><img src="src/icons/sirds.png" class="likePoga"></button>
            <button type="button" class="button"><img src="src/icons/comment.png" class="likePoga"></button>
          </div>

          <div class="comments"> 
            <a href="https://www.youtube.com/watch?v=0Gkhol2Q1og">Andris B:</a> <a> labs! <br></a>
            <a href="https://www.youtube.com/watch?v=0Gkhol2Q1og">Stīvs G:</a> <a> bro fell off<br></a>
            <a href="https://www.youtube.com/watch?v=0Gkhol2Q1og">apskatīt pārējos komentārus</a>
          </div>      
        
        </div> 
      </div>  
    </div> 
        


   

  
  
  
  </main>


  <toolbar>

  </toolbar>
</template>

<style>

.userName{
  padding-left: 5%;
  position: absolute;
}

.userPad{
  padding-top: 5%;
  box-sizing: border-box;
  padding-left: 25%;
}

.userPosts{
      
      background-color: white;
      width: 500px;
      height: 500px;
      border: 5px solid black;
      position: relative;
      position: center;
} 

.userProfilePic{
  width: 25%;
  height: 100%;
  position: relative;

}


.userNameBorder{
  background-color: white;
  height: 15%;
  border: 3px solid black;
  font-size: 200%;
}

.userUploadFrame{
  height: 420px;
  width: 500px;
  
  color: green;
}
.userUpload{
  height: 420px;
  width: 492px;
}

div.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 5px;
  background-color: #cae8ca;
  border: 3px solid #4CAF50;
} 


.title {  
  padding-top: 0%;
  font-size: 3rem;
  text-align: center;
  opacity: 0;
}

.fade-in {
  animation: fade-in 1s ease-out;
  animation-fill-mode: forwards;
}

.title-container {
  margin: auto;
  position: relative;
  margin-bottom: 20px;
}

.comments
{
  padding-left: 50px;
  font-size: 30px;
  position: relative;
}
.likePoga{
  height: 65px;
  width: 65px;
}
.userComments{
      border: 3px solid black;
      width: 500px;
      height: 250px;
      background-color: white;
      position: relative;
} 
.button{
  margin-left: 20px;
  margin-top: 5px;
  height: 75px;
  width: 75px;
}


@keyframes fade-in {
  from {
    opacity: 0; 
  }
  to {
    opacity: 1;
  }
}


</style>