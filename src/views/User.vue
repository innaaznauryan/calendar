<template>
  <div class="user">
    <h2>Welcome {{user.fullName}}!</h2>
    <p>Stay prepared!</p>
    <p>Your next game is on {{nextGame}}</p>
    <img src="../assets/image/checkmate2.jpg" alt="">
  </div>
</template>

<script setup>
const user = JSON.parse(localStorage.getItem("user"))
console.log(user.nextGame)
const nextGame = new Date(user.nextGame).toLocaleString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

</script>

<style lang="scss" scoped>
.user{
  text-align: center;
}
h2{
  text-align: center;
  padding: 20px;
}
p{
  text-align: center;
  font-size: 20px;
  padding: 20px;
}
img{
  width: 80%;
}
</style>