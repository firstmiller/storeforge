import axios from "axios";
import { serverURI } from '@/constants'

export default class AuthService {

    static async register(login, email, password) {
        const formdata = new FormData();
        formdata.append("username", login);
        formdata.append("password", password);
        formdata.append("email", email);
        const response = await axios
            .post(`${serverURI}/auth/register`, formdata)
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