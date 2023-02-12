import React, { Component } from 'react';
import styles from '../../common/styles/Columns.module.scss';
import produkty from '../../common/consts/produkty';

class AddProducts extends Component {
state = {
name: '',
category: '',
isFood: false
};

handleChange = (event) => {
const { name, value, type, checked } = event.target;

this.setState({
  [name]: type === 'checkbox' ? checked : value
});

};

handleSubmit = (event) => {
event.preventDefault();
const { name, category, isFood } = this.state;
const newProduct = {
nazwa: name,
kategoria: category,
produktSpozywczy: isFood
};
this.props.onAddProduct(newProduct)
// produkty.push(newProduct);
// this.setState({
// name: '',
// category: '',
// isFood: false
// });
};

render() {
const { name, category, isFood } = this.state;
return (
<form className={styles.form} onSubmit={this.handleSubmit}>
<input
       type="text"
       name="name"
       value={name}
       onChange={this.handleChange}
       placeholder="Nazwa"
     />
<input
       type="text"
       name="category"
       value={category}
       onChange={this.handleChange}
       placeholder="Kategoria"
     />
<label>
Produkt spożywczy
<input
         type="checkbox"
         name="isFood"
         checked={isFood}
         onChange={this.handleChange}
       />
</label>
<button type="submit">Dodaj</button>
</form>
);
}
}

export default AddProducts;