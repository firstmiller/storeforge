import { useMemo } from "react";

export const useSortedProducts = (products, sort) => {
    const sortedProducts = useMemo(() => {
        if (!products) return []; // Проверка на undefined
        if (sort) {
            return [...products].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return products;
    }, [sort, products]);

    return sortedProducts;
};

// Хук для фильтрации продуктов по диапазону цен
export const usePriceRangeFilter = (products, priceRange) => {
    const filteredProducts = useMemo(() => {
        if (!products) return []; // Проверка на undefined
        return products.filter(product =>
            Number(product.price) >= Number(priceRange[0]) &&
            Number(product.price) <= Number(priceRange[1])
        );
    }, [products, priceRange]);

    return filteredProducts;
};

// Основной хук для фильтрации и сортировки продуктов
export const useProducts = (products, priceRange, query) => {
    const filteredProduct = usePriceRangeFilter(products, priceRange);
    const sortedAndSearchedproducts = useMemo(() => {
        if (!filteredProduct) return []; // Проверка на undefined
        return filteredProduct.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, filteredProduct]);

    return sortedAndSearchedproducts;
};