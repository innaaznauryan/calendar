<template>
  <div class="veil"></div>
  <div class="modal">
    <form @submit="handlesave">
      <label for="room">Room</label>
      <input v-model="room" id="room" type="text" required>
      <label for="date">Date</label>
      <input v-model="date" id="date" type="text" required>
      <label for="status">Status</label>
      <input v-model="status" id="status" type="text" required>
      <label for="guest">Guest</label>
      <input v-model="guest" id="guest" type="text" required>
      <div class="btns">
        <button type="submit" class="button">Save</button>
        <button class="button" @click="handlecancel">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
  selectedBooking: Object,
  selectedDate: String
})
const room = ref(props.selectedBooking?.room)
const date = ref(props.selectedDate.toLocaleString())
const status = ref(props.selectedBooking?.status)
const guest = ref(props.selectedBooking?.guest)
const id = ref(props.selectedBooking?.id)

const emit = defineEmits(["save", "cancel"])

const handlesave = () => {
  emit("save", {
    room: room.value,
    date: date.value,
    status: status.value,
    guest: guest.value,
    id: id.value
  })
}
const handlecancel = () => {
  emit("cancel")
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
  z-index: 9;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  padding: 20px;
  max-width: 60%;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  cursor: pointer;
}

input {
  padding: 10px;
  border-radius: 7px;
  border: 1px solid #ddd;
}

.btns {
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 20px;

}
</style>