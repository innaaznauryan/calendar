<template>
  <h2>Book date for checkmate events!</h2>
  <div class="calendar-container">
    <VCalendar borderless @dayclick="handleDayClick" :attributes="attributes"/>
  </div>
  <div class="btn-container">
    <button class="button" @click="bookSelectedDate">Book Date</button>
  </div>
  <p v-if="dateError" class="error">Please select a date!</p>
  <BookDate
      v-if="showBook"
      :selectedBooking="selectedBooking"
      :selectedDate="selectedDate"
      @cancel="showBook = false"
      @save="saveBooking">
  </BookDate>
</template>
<script setup>
import {computed, onMounted, ref} from "vue";
import {bookings, getBookings, editBooking, addBooking} from "../composable/useBookings.js";
import BookDate from "../components/BookDate.vue";

const selectedDate = ref(null)
const selectedBooking = ref(null)
const showBook = ref(false)
const dateError = ref(false)

const attributes = computed(() => [
  {
    highlight: true,
    dates: bookings.value?.map(booking => booking.date)
  },
]);

const handleDayClick = (e) => {
  selectedDate.value = e.ariaLabel
  if (e.attributeCells.length) {
    const selected = bookings.value.find(booking => {
      return new Date(booking.date).toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }) === new Date(e.ariaLabel).toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    })
    selectedBooking.value = selected
  } else {
    selectedBooking.value = null
  }
}

const bookSelectedDate = () => {
  if (selectedDate.value) {
    showBook.value = true
  } else {
    dateError.value = true
    setTimeout(() => {
      dateError.value = false
    }, 3000)
  }
}

const saveBooking = (updatedBooking) => {
  if (selectedBooking.value) {
    editBooking(updatedBooking)
  } else {
    addBooking(updatedBooking)
  }
  showBook.value = false
  selectedDate.value = null
  selectedBooking.value = null
}

onMounted(async () => {
  await getBookings()
})

</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  padding-top: 20px;
}

.calendar-container {
  margin: 20px auto;
  max-width: 250px;
}

.btn-container {
  text-align: center;
}

.disabled {
  color: gray;
  cursor: default;
}

.error {
  color: red;
  text-align: center;
  padding: 10px;
}

</style>