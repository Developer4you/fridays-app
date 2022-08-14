import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: '',
    headers:     {
        "API-KEY": ""
    }
});

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(data:LoginParamsType) {
        const promise = instance.post<ResponseType<{userId:string}>>('auth/login',data)
        return promise
    },
    logout(){
        const promise = instance.delete<ResponseType<{userId:string}>>('auth/login')
        return promise
    }
}

// types
export type LoginParamsType = {
    email:string
    password:string
    rememberMe:boolean
    captcha?:string
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}