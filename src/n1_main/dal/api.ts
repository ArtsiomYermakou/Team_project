import axios from 'axios';

// http://localhost:7542/2.0/  => local back

// https://neko-back.herokuapp.com/2.0/  => remote back

const settings = {
    withCredentials: true,
}

const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    ...settings,
})

const authAPI = {
    login() {
        return instance.get("");
    },
}