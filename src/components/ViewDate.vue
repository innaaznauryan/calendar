<template>
  <div>
    <h3>Room</h3>
    <span>{{selectedBooking.room}}</span>
    <h3>Date</h3>
    <span>{{selectedBooking.date}}</span>
    <h3>Status</h3>
    <span>{{selectedBooking.status}}</span>
    <h3>Guest</h3>
    <span>{{selectedBooking.guest}}</span>
  </div>
</template>

<script setup>
defineProps({
  selectedBooking: Object
})
</script>

<style lang="scss" scoped>

</style>