<template>
  <div class="veil"></div>
  <div class="modal">
    <p>Are you sure you want to log out?</p>
    <div class="btn-container">
      <button class="button" @click="confirm">Yes</button>
      <button class="button" @click="close">No</button>
    </div>
  </div>
</template>

<script setup>
import {logout} from "../composable/useUsers.js";

const emit = defineEmits(["close"])

const confirm = () => {
  logout()
  emit("close")
}
const close = () => {
  emit("close")
}
</script>

<style lang="scss" scoped>
.veil {
  position: fixed;
  inset: 0;
  background-color: #000;
  opacity: 0.5;
  width: 100%;
  height: 100vh;
}

.modal {
  position: absolute;
  top: 100px;
  left: 50%;
  z-index: 9999;
  transform: translateX(-50%);
  background-color: #fff;
  padding: 20px;

  p {
    font-size: 20px;
    padding: 10px;
    text-align: center;
  }

  .btn-container {
    display: flex;
    gap: 10px;
    justify-content: center;
    padding-bottom: 10px;
  }
}
</style>