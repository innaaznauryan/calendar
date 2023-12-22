import {ref} from "vue";
import axiosService from "../services/axiosService.js";
import router from "../router/routes.js";

const isLoggedIn = ref(!!localStorage.getItem("jwt"))
const loginError = ref(null)
const login = async (email, password) => {
    try {
        const response = await axiosService.GET_USERS()
        const users = response.data.users
        const foundUser = users.find(user => {
            return user.email === email && user.password === password
        })
        if (foundUser) {
            const {password, ...userData} = foundUser
            localStorage.setItem("jwt", JSON.stringify(userData.token))
            localStorage.setItem("user", JSON.stringify(userData))
            isLoggedIn.value = true
            switch (userData.role) {
                case "admin":
                    await router.push({name: "admin"})
                    break
                case "owner":
                    await router.push({name: "owner"})
                    break
                case "user":
                    await router.push({name: "user"})
                    break
            }
        } else {
            loginError.value = "Wrong email and/or password!"
            setTimeout(() => {
                loginError.value = null
            }, 3000)
            localStorage.removeItem("jwt")
            localStorage.removeItem("user")
        }
    } catch (error) {
        console.log(error)
    }
}
const logout = async () => {
    localStorage.removeItem("jwt")
    localStorage.removeItem("user")
    isLoggedIn.value = false
    await router.push({name: "login"})
}

export {isLoggedIn, loginError, login, logout}