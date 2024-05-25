import {useMemo} from "react";

export const useSortedProducts= (products, sort) => {
    const sortedProducts = useMemo(() => {
        if(sort) {
            return [...products].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return products;
    }, [sort, products])

    return sortedProducts;
}

export const useProducts = (products, sort, query) => {
    //const sortedproducts = useSortedProducts(products, sort);
    const sortedproducts = products;
    const sortedAndSearchedproducts = useMemo(() => {
        return sortedproducts.filter(product => product.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedproducts])
    return sortedAndSearchedproducts;
}