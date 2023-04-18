<template>
  <div class="parent">
    <div v-for="user in userInfo" :key="user.id">
      <a id="username" class="font-head">{{ user.username }}</a>
      <div id="profileabout">
        <a id="ProfileImage"><img src="../components/icons/kristaps.jpg" alt="kristaps" style="width:300px;height:400px;border-radius:30px;"></a><br>
        <a id="textHeightChange" class="font-head">{{ user.name }}</a><br>
        <a class="font-regular">{{ user.bio }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            userInfo: [
                { username: 'Kristzz', name: 'Krists', bio: 'Armīnieks, 18 gadu vecumā ar 20 gadu stāžu dienestā, garšo mellenes, māk apieties ar datoru.', id: 1},
            ]
        }
    }
}
</script>

<style>
  
</style>