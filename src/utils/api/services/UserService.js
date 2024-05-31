import { serverURI } from '@/constants'
export default class UserService {

    static async getUserInfo() {
        const response = await fetch(`${serverURI}/api/auth/user`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('auth')
            }
        })
            .then((response) => response.json());
        return response;
    }

}