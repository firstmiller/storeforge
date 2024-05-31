import axios from "axios";
import { serverURI } from '@/constants'

export default class AuthService {

    static async register(inputs) {

        const response = await axios
            .post(`${serverURI}/api/auth/register`, {
                username: inputs.loginValue,
                password: inputs.passValue,
                email: inputs.emailValue
            })
        return response;
    }
    static async authenticate(login, password) {
        const response = await axios
            .post(`${serverURI}/api/auth/authenticate`, {
                username: login,
                password: password
            })
        return response;
    }
    static async login() {
        const response = await fetch(`${serverURI}/api/login`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('auth')
            }
        })
        return response;
    }
}