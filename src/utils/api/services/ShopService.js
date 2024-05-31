import { serverURI } from '@/constants'
export default class ProductService {

    static async getShops() {
        const response = await fetch(`${serverURI}/api/shop/get`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('auth')
            }
        }).then((response) => {
            return response.json()
        })
        return response;
    }

    static async addShop(shop) {
        const response = await fetch(`${serverURI}/api/shop/create`, {
            method: 'POST',
            body: JSON.stringify(shop),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': 'Bearer ' + localStorage.getItem('auth')
            }
        }).then((response) => {
            return response.json()
        })
            .then((product) => { console.log(product.productNames) })
    }

    static async deleteProduct(product) {
        const response = await fetch(`${serverURI}/api/product/delete`, {
            method: 'POST',
            body: JSON.stringify({productName: product.productName, shopName: product.shop.shopName}),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': 'Bearer ' + localStorage.getItem('auth')
            }
        });
    }
    static async updateShop(shop) {
        console.log(shop);
        const response = await fetch(`${serverURI}/api/shop/update`, {
            method: 'POST',
            body: JSON.stringify(shop),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': 'Bearer ' + localStorage.getItem('auth')
            }
        })
        .catch(()=>{});
    }
}