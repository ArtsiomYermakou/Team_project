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
    login(data: LoginParamsType) {
        return instance.post<ResponseLoginType>("auth/login", data);
    },
}


//types
export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}

export type ResponseLoginType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error: string
}