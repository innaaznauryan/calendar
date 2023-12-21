<template>
  <h2>Login</h2>
  <form @submit.prevent="handleLogin">
    <input
        type="text"
        v-model="fullName"
        placeholder="Full Name"
        required>
    <input
        type="text"
        v-model="email"
        placeholder="Email"
        required>
    <input
        type="password"
        v-model="password"
        placeholder="Password"
        required>
    <button type="submit" class="button">Sign in</button>
  </form>
  <p v-if="loginError">{{ loginError }}</p>
</template>

<script setup>
import {ref, computed} from "vue";
import {login, loginError} from "../composable/useUsers.js";

const fullName = ref(null)
const email = ref(null)
const password = ref(null)

const handleLogin = async () => {
  await login(email.value, password.value)
}

</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  padding: 10px;
}

form {
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  gap: 20px;

  input {
    padding: 10px;
    border-radius: 7px;
    border: 1px solid #ddd;
  }

  button {
    align-self: center;
  }
}

p {
  color: red;
  text-align: center;
  padding: 10px;
}
</style>