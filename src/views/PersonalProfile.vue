<template>
  <div class="parent">
    <div v-for="user in userInfo" :key="user.id">
      <a id="username" class="font-head">{{ user.username }}</a>
      <div id="profileabout">
        <a id="ProfileImage"></a>
        <a class="font-regular">{{ user.name }}</a><br>
        <a class="font-small">{{ user.bio }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            userInfo: [
                { username: 'Kristzz', name: 'Krists', bio: 'Non dui taciti placerat taciti rhoncus posuere viverra mollis adipiscing.', id: 1},
            ]
        }
    }
}
</script>

<style>
  #username{
    max-width: 1000px;
    height: 30px;
    background-color: var(--color-container);
    display: flex;
    justify-content: baseline;
    align-items: center;
  }

  #profileabout{
    max-width: 1000px;
    min-height: 800px;
    background-color: var(--color-container);
  }
</style>