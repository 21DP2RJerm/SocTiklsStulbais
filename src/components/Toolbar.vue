<template>
<nav>
<div class="toolbar">
    <ul class="container">
        <li class="item">
            <a  class="item-link">
                <div  class="item-icon">
                    <Router-Link :to="{ name: 'home' }">
                        <img src="/src/components/icons/home.png" alt="home.png" class="icon home">
                    </Router-Link>                  
                </div>
                
            </a>
        </li>
        <li class="item">
            <a class="item-link">
                <div class="item-icon">
                    <Router-link :to="{ name: 'search' }">
                        <img src="/src/components/icons/search.png" alt="search.png" class="icon search">
                    </Router-link>
                </div>
                
            </a>
        </li>
        <li class="item">
            <a class="item-link">
                <div class="item-icon">
                    <Router-Link :to="{ name: 'profile' }">
                        <img src="/src/components/icons/pfp.png" alt="pfp.png" class="icon pfp">
                    </Router-Link>
                </div>
                
            </a>
        </li>
        <li class="item">
            <a class="item-link">
                <div class="item-icon">
                    <Router-Link :to="{ name: 'login' }">
                        <img src="/src/components/icons/settings.png" alt="126472.png" class="icon settings">                    
                    </Router-Link>
                </div>
            </a>
        </li>
    </ul>
</div>
</nav>
    
</template>
<script>
export default {
    name: 'toolbar',
}
</script>
<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;

}
body{
    background-color:#fffde7 ;
}
nav{
    position: fixed;
    left: 0;
    right: 0;
    bottom: -2%;
    width: 100%;
    padding: 24px;
    max-width: 500px;
    margin: 0 auto;

}
.icon{
    width: 35px;
    height: 35px;
}

.toolbar{
    display: flex;
    padding: 8px;
    background-color:#f6e3ba ;
    box-shadow: 0 0 16px 0 #111;
    border-radius: 8px;
    border:1 px solid rgba(255,255,255, 0.1);
}
.container{
    display: flex;
    justify-content: space-around;
    width: 100%;
    list-style: none;
}
.item{
    display: flex;
    position: relative;
    padding:2px;
}

.item-link{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #444;
    text-decoration: none;
}
.item-icon{
    display:flex;
    align-items: center;
    justify-content: center;
    background-color:#fffde7 ;
    border-radius: 50%;
    height: 46px;
    width: 46px;
    
}
</style>