import axios from "axios";

const apiClient = axios.create({
    withCredentials: false,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
})

apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('jwt')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, error => {
    return Promise.reject(error)
})

export default {
    GET_USERS() {
        return apiClient.get("auth.json")
    },
    GET_BOOKINGS() {
        return apiClient.get("http://localhost:3000/bookings")
    },
    UPDATE_BOOKINGS(booking) {
        return apiClient.put(`http://localhost:3000/bookings/${booking.id}`, booking)
    },
    ADD_BOOKING(booking) {
        return apiClient.post("http://localhost:3000/bookings", booking)
    }
}