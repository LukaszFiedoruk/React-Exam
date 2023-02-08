import React, { useState } from 'react';
import produkty from '../../common/consts/produkty';
import styles from '../../common/styles/Columns.module.scss';

const ProductsList = ({ onAddToShopingList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const filteredProducts = produkty.filter((product) => {
    return product.nazwa.toLowerCase().includes(searchTerm.toLowerCase()) &&
           (category === '' || product.kategoria === category);
  });

  return ( 
    <div>
      <div className={styles.filtersContainer}>
        <input 
          type="text" 
          value={searchTerm} 
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <select 
          value={category} 
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">All Categories</option>
          {Array.from(new Set(produkty.map((product) => product.kategoria))).map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <ul className={styles.productsList}>
        {filteredProducts.map((product) => (
          <li key={product.nazwa} onClick={() => onAddToShopingList(product)}>
            {product.nazwa}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;