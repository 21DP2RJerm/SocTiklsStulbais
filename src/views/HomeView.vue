<template>
  <main>
    <div class="title-container" v-if="showTitle">
    <h1 class="title sticky" :class="{ 'fade-in': fadeIn }" >{{ title }}</h1>
    </div>
    
    <div id="viens pabeigts posts">
      <div class = "userPad">
        <div class="userPosts" id="1">

            <img src="src/icons/FtXgiG7WAAAaIrT.png" class = "userProfilePic">

            <div class="userNameBorder" id="1">
                <a href="https://www.youtube.com/watch?v=0Gkhol2Q1og">username</a>
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
          komentars 1 <br>
          2 <br>
          3
          </div>
                  
        </div>


      </div>
    </div>

  </main>
</template>



<script>
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
};
</script>
<style>
.comments
{
  padding-left: 50px;
  font-size: 30px;
}
.likePoga{
  height: 65px;
  width: 65px;
}
.userComments{
      border: 3px solid black;
      width: 495px;
      height: 250px;
      background-color: gray;
      position: relative;
      position: center;
} 
.button{
  margin-left: 20px;
  margin-top: 5px;
  height: 75px;
  width: 75px;
}
.userPad{
  padding-top: 10%;
  padding-left: 40%;
}
.userPosts{
      
      width: 500px;
      height: 500px;
      background-color: white;
      position: relative;
      position: center;
} 

.userProfilePic{
  width: 65px;
  height: 65px;
  padding-left: 5px;
  padding-top: 5px;
  position: absolute;
}


.userNameBorder{
  background-color: aqua;
  height: 45px;
  border: 3px solid black;
  padding-top: 25px;
  padding-left: 75px;
  font-size: 200%;
}

.userUploadFrame{
  height: 420px;
  width: 495px;
  border: 3px solid black;
  color: green;
}
.userUpload{
  height: 250px;
  width: 250px;
  padding-left: 25%;
  padding-top: 15%;
}

div.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 5px;
  background-color: #cae8ca;
  border: 2px solid #4CAF50;
} 


.title {
  
  position: center;
  padding-top: 25%;
  font-size: 3rem;
  text-align: center;
  opacity: 0;
  background-color: aqua;
}

.fade-in {
  animation: fade-in 1s ease-out;
  animation-fill-mode: forwards;
}
.title-container {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}


@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
