import React, { useEffect, useState } from 'react'
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Navbar } from './components/Navbar'
import { Products } from './components/Products'
import { useProducts } from '@hooks';
import { ProductService, ShopService } from '../../utils/api';


const Store = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [storage, setStorage] = useState([]);
  const [storeData, setStoreData] = useState({});
  const MIN = 100;
  const MAX = 100000;
  const [filter, setFilter] = useState({ query: '', category: '', priceMin: MIN, priceMax: MAX });
  const [valuePrice, setValuePrice] = useState(1);


  //setProducts([{ id: 1, title: 'Iphone 5', price: 25000 }, { id: 2, title: 'Iphone 6', price: 45000 }]);
  const [priceRangeValues, setPriceRangeValues] = useState([MIN, MAX]);
  const sortedAndSearchedProducts = useProducts(products, priceRangeValues, filter.query);
  const findSizeStorage = () => {
    let sum = 0;
    storage.map((product) => {
      sum += product.count;
    })
    return sum;
  }
  const getProducts = (store) => {
    setIsLoading(true);
    ProductService.getProducts(store)
      .then((response) => {
        return response.productNames;
      })
      .then((products) => {
        setProducts(products);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }

  const calcSummStorage = () => {
    let sum = 0;
    storage.map((product) => {
      sum += product.price * product.count;
    })
    return sum;
  }
  useEffect(() => {
    ShopService.getShops()
      .then((store) => {
        setStoreData(store);
        return store;
      })
      .then((store) => {
        getProducts(store);
        document.title = store.shopName;
      })
      .catch(() => {
        setIsLoading(false);
      })
  }, [])

  const getCountProducts = () => {
    return sortedAndSearchedProducts.length;
  }

  return (
    <>
      <Header calcSummStorage={calcSummStorage} findSizeStorage={findSizeStorage} storage={storage} setStorage={setStorage} storeData={storeData} setCartOpen={setCartOpen} cartOpen={cartOpen} filter={filter} setFilter={setFilter} />
      <Content>
        <Navbar valuePrice={valuePrice} setValuePrice={setValuePrice} priceRangeValues={priceRangeValues} setPriceRangeValues={setPriceRangeValues} />
        <Products storage={storage} setStorage={setStorage} isLoading={isLoading} getCountProducts={getCountProducts} products={sortedAndSearchedProducts} />
      </Content>
    </>
  )
}

export default Store
