import axios from 'axios';

// http://localhost:7542/2.0/  => local back

// https://neko-back.herokuapp.com/2.0/  => remote back

const settings = {
    withCredentials: true,
}

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0/",
    ...settings,
})

export const authAPI = {
    registration(data: RegistrationDataType) {
        return instance.post("auth/register", data);
    },
}

export type RegistrationDataType = {
    email: string
    password: string
    repeatPassword?: string // not necessarily
}
