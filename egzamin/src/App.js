import React, { useState } from "react";
import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import AddProducts from './components/AddProducts/AddProducts';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import styles from './App.module.scss';

function App() {
  const [shopingList, setShopingList] = useState([]);

  const handleAddToShopingList = (product) => {
    setShopingList([...shopingList, product]);
  };

  const handleRemoveFromShopingList = (index) => {
    const newShopingList = [...shopingList];
    newShopingList.splice(index, 1);
    setShopingList(newShopingList);
  };

  return (
    <div className={styles.appWrapper}>
      <AddProducts />
      <ProductsFilters />
      <div className={styles.columnsWrapper}>
        <ProductsList onAddToShopingList={handleAddToShopingList} />
        <ShopingList shopingList={shopingList} onRemoveFromShopingList={handleRemoveFromShopingList} />
      </div>
    </div>
  );
}

export default App;