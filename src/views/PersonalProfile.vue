<template>
  <h1>User info</h1>
  <div v-for="user in userInfo" :key="user.id">
    <h2>Username: {{ user.username }}<br>Name: {{ user.name }}</h2>
  </div>
</template>

<script>
export default {
    data(){
        return{
            userInfo: [
                { username: 'Kristzz', name: 'Krists', id: 1},
            ]
        }
    }
}
</script>

<style>

</style>