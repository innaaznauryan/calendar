<template>
  <div class="owner">
    <h2>Welcome {{owner.fullName}}!</h2>
    <p>{{owner.info}}</p>
    <img src="../assets/image/checkmate.jpg" alt="">
  </div>
</template>

<script setup>
const owner = JSON.parse(localStorage.getItem("user"))

</script>

<style lang="scss" scoped>
.owner{
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