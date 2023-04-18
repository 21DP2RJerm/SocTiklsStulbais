<script>
export default {
  setup() {
    
  },
}
</script>

<template>
  <main>
    <div class="chess">
      <h1>Chess</h1>

      <div id="gameboard">
        <div class="square melns"></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        </div>

        <div id="gameboard">
        
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
    </div>  
    <div id="gameboard">
        <div class="square melns"></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        </div>

        <div id="gameboard">
        
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
    </div>  
    <div id="gameboard">
        <div class="square melns"></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        </div>

        <div id="gameboard">
        
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
    </div>  
    <div id="gameboard">
        <div class="square melns"></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        </div>

        <div id="gameboard">
        
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
        <div class="square balts" ></div>
        <div class="square melns" ></div>
    </div>  

    </div>
  </main>   
</template>





<style>
body {
    display: flex;
        
    height: 100vh;
    
    flex-direction: column;
}

#gameboard {
    display: flex;
    align-items: center;
    justify-content: center;
        
    
}

.square {
    display: flex;
    width: 10vh;
    height: 10vh;
}

.chess-piece{
    display: flex;
    width: 10vh;
    height: 10vh;
}

.melns{
    background-color: rgb(144, 144, 144);
}

.balts{
    background-color: rgb(240, 240, 230);
}

.highlight{
    background-color: rgb(9, 219, 72);

}
</style>