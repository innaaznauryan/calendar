import {ref} from "vue";
import axiosService from "../services/axiosService.js";
import { v4 as uuidv4 } from 'uuid';

const bookings = ref(null)

const getBookings = async () => {
    try {
        const response = await axiosService.GET_BOOKINGS()
        bookings.value = response.data
    } catch (error) {
        console.log(error)
    }
}
const editBooking = async (booking) => {
    try {
        await axiosService.UPDATE_BOOKINGS(booking)
    } catch (error) {
        console.log(error)
    }
}
const addBooking = async (booking) => {
    try {
        const bookingToAdd = {...booking, id: uuidv4()}
        await axiosService.ADD_BOOKING(bookingToAdd)
        bookings.value.push(bookingToAdd)
    } catch (error) {
        console.log(error)
    }
}

export {bookings, getBookings, editBooking, addBooking}