import React, { useState } from "react";
import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import AddProducts from './components/AddProducts/AddProducts';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import produkty from "./common/consts/produkty";
import styles from './App.module.scss';

function App() {
  const [shopingList, setShopingList] = useState([]);
  const [products, setProducts] = useState(produkty);

  const handleAddToShopingList = (product) => {
    setShopingList([...shopingList, product]);
  };

  function handleRemoveFromShopingList(index) {
    const newShopingList = [...shopingList];
    newShopingList.splice(index, 1);
    setShopingList(newShopingList);
  }
  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className={styles.appWrapper}>
      <AddProducts onAddProduct={handleAddProduct} />
      {/* <ProductsFilters /> */}
      <div className={styles.columnsWrapper}>
        <ProductsList products={products} onAddToShopingList={handleAddToShopingList} />
        <ShopingList shopingList={shopingList} onRemoveFromShopingList={handleRemoveFromShopingList} />
      </div>
    </div>
  );
}

export default App;