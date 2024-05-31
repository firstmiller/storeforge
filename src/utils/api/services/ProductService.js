import { serverURI } from '@/constants'
export default class ProductService {

    static async getProducts(shop) {
        const response = await fetch(`${serverURI}/api/product/get?shopName=${shop.shopName}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('auth')
            }
        })
            .then((response) => response.json());
        return response;
    }

    static async addProduct(product) {
        console.log(product);
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
    static async updateProduct(product) {
        console.log(product);
        const response = await fetch(`${serverURI}/api/product/update`, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': 'Bearer ' + localStorage.getItem('auth')
            }
        })
        .catch(()=>{});
    }
}