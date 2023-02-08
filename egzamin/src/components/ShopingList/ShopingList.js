import React from 'react';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';
import styles from '../../common/styles/Columns.module.scss';

const ShopingList = ({ shopingList, onRemoveFromShopingList }) => {
  return (
    <ul className={`${commonColumnsStyles.App} ${styles.shopingList}`}>
      {shopingList.map((item, index) => (
        <li key={item.nazwa} onContextMenu={e => {
          e.preventDefault();
          onRemoveFromShopingList(item);
        }}>
          {item.nazwa}
        </li>
      ))}
    </ul>
  );
};

export default ShopingList;