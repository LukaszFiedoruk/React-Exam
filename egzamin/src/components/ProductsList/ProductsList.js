
import produkty from '../../common/consts/produkty';
import styles from '../../common/styles/Columns.module.scss'

const ProductsList = ({ onAddToShopingList }) => {
  return ( 
    <ul className={styles.productsList}>
      {produkty.map((product) => (
        <li key={product.nazwa} onClick={() => onAddToShopingList(product)}>
          {product.nazwa}
        </li>
        
      ))}
    </ul>
  );
};

export default ProductsList;