import React, { useEffect, useState } from 'react'
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Navbar } from './components/Navbar'
import { Products } from './components/Products'
import { useProducts } from '@hooks';
import { ProductService } from '../../utils/api';

const Store = () => {

  const [products, setProducts] = useState([]);

  const [filter, setFilter] = useState({ query: '', category: '' });
  const MIN = 100;
  const MAX = 100000;
  //setProducts([{ id: 1, title: 'Iphone 5', price: 25000 }, { id: 2, title: 'Iphone 6', price: 45000 }]);
  const [priceRangeValues, setPriceRangeValues] = useState([MIN, MAX]);
  const sortedAndSearchedProducts = useProducts(products, priceRangeValues, filter.query);

  useEffect(() => {
    const resultResponse = ProductService.getProducts()
      .then((response) => {
        console.log(response.productNames);
        setProducts(response.productNames);
      });
  }, [])

  const getCountProducts = () => {
    return sortedAndSearchedProducts.length;
  }

  return (
    <>
      <Header filter={filter} setFilter={setFilter} />
      <Content>
        <Navbar priceRangeValues={priceRangeValues} setPriceRangeValues={setPriceRangeValues} />
        <Products getCountProducts={getCountProducts} products={sortedAndSearchedProducts} />
      </Content>
    </>
  )
}

export default Store
