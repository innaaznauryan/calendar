<template>
  <nav>
    <div class="container">
      <img src="./assets/logo/Checkmate.png" alt="logo" @click="handleClick">
      <a v-if="isLoggedIn" class="logout" @click="handleLogout">Logout</a>
    </div>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
  <template v-if="showLogout">
    <Confirm :showLogout="showLogout" @close="handleClose"/>
  </template>
</template>

<script setup>
import {ref} from "vue";
import {logout, isLoggedIn} from "./composable/useUsers.js";
import Confirm from "./components/Confirm.vue";
const showLogout = ref(false)

const handleClick = () => {
  location.reload()
}
const handleLogout = () => {
  showLogout.value = true
}
const handleClose = () => {
  showLogout.value = false
}

</script>

<style scoped>
nav{
  background-color: #595286;
  .container{
    display: flex;
    justify-content: space-between;
    height: 60px;
  }
  img{
    height: 100%;
    cursor: pointer;
  }
  .logout{
    cursor: pointer;
    display: inline-block;
    color: #fff;
    padding: 20px 0;
    font-size: 18px;
  }
}

</style>
