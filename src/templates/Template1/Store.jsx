import React, { useState } from 'react'
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Navbar } from './components/Navbar'
import { Products } from './components/Products'
import { useProducts } from '@hooks';

const Store = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [products, setProducts] = useState([{id: 1, title: 'sadasd', price: 213123123}, {id: 2, title: 'asdasd', price: 21312432}]);
  const [filter, setFilter] = useState({ query: '', category: '', minPrice: 0, maxPrice: 100000 });
  const sortedAndSearchedProducts = useProducts(products, '', filter.query);

  const getCountProducts = () => {
    return sortedAndSearchedProducts.length;
  }

  return (
    <>
      <Header filter={filter} setFilter={setFilter}/>
      <Content>
        <Navbar sliderValue={sliderValue} setSliderValue={setSliderValue} />
        <Products getCountProducts={getCountProducts} products={sortedAndSearchedProducts} />
      </Content>
    </>
  )
}

export default Store
