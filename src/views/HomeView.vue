<template>
  <main>
    <div class="title-container" v-if="showTitle">
    <h1 class="title" :class="{ 'fade-in': fadeIn }" position:sticky>{{ title }}</h1>
    


    <p>Seit ir teksts lmao</p>
    <p>Mes fancy n shit or sm</p>

    <div class="split" id="1">
        seit ir posts uwu
    </div>
    <div></div>
    <div class="split" id="2">
        2222222222222222222222222222
    </div>
    <div></div>
    <div class="split" id="3">
        seit ir posts u333333333333333333333333
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

.split{
    margin: 500px;
    width: 7500px;
    height: 7500px;
    background-color: white;
    
    
    
    
  }
  
.split{
    position: relative;
    margin: 500px;
    background-color: white;
    
    
    
    
  }

.title-container {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.sticky {
  position: fixed;
  top: 250px;
  width: 100%
}


.title {
  padding-top: 1000px;
  font-size: 3rem;
  text-align: center;
  opacity: 0;
  background-color: aqua;
}

.fade-in {
  animation: fade-in 1s ease-out;
  animation-fill-mode: forwards;
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
