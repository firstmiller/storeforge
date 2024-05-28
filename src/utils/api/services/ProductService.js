import { serverURI } from '@/constants'
import axios from 'axios';
export default class ProductService {

    static async getProducts() {
        const response = await fetch(`${serverURI}/api/product/get?shopName=shop1`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('auth')
            }
        })
            .then((response) => response.json());
        return response;
    }

    static async addProduct(product) {
        const response = await fetch(`${serverURI}/api/product/create`, {
            method: 'POST',
            body: JSON.stringify({ products: [product] }),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': 'Bearer ' + localStorage.getItem('auth')
            }
        }).then((response) => {
            return response.json()
        })
            .then((product) => { console.log(product.productNames) })
    }
}