import React, { useState } from 'react'
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Navbar } from './components/Navbar'
import { Products } from './components/Products'
import { useProducts } from '@hooks';

const Store = () => {

  const [products, setProducts] = useState([{ id: 1, title: 'Iphone 5', price: 25000 }, { id: 2, title: 'Iphone 6', price: 45000 }]);
  const [filter, setFilter] = useState({ query: '', category: '' });
  const MIN = 100;
  const MAX = 100000;
  //setProducts([{ id: 1, title: 'Iphone 5', price: 25000 }, { id: 2, title: 'Iphone 6', price: 45000 }]);
  const [priceRangeValues, setPriceRangeValues] = useState([MIN, MAX]);
  const sortedAndSearchedProducts = useProducts(products, priceRangeValues, filter.query);


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
