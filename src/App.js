import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import { firestore } from "./firebase";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products: [],
        loading : true
    }
    this.db = firestore;
}

componentDidMount() {
    
  //fetching all the products from the cloud firestore
  //firestore
  this.db
  //query for fetching the product which we want as per our query
  .collection("products") //getting all the products
  // .where('price','>=', 999) // after fetching db we should write query
  .onSnapshot((snapshot) => { //snapshot gives the snapshot of the database at a point of time
    const products = snapshot.docs.map((doc) => { //here docs is an array containing the main data frmo database in snapshot
      const data = doc.data();
      data["id"] = doc.id;
      return data;
    });
  
    this.setState({
       products: products,
       loading: false 
    });
  
  });
}

handleIncreaseQuantity = (product) => {
    console.log('Increase the qty of ', product);
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products : products
    })
}

handleDeleteProduct = (id) => {
    const {products} = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
        products : items
    })
}

handleDecreaseQuantity = (product) => {
    console.log('Increase the qty of ', product);
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0){return;}
    products[index].qty -= 1;

    this.setState({
        products : products
    })
}

getCartCount () {
  const {products} = this.state;

  let count = 0;

  products.forEach((product) => {
    count += product.qty;
  })
  return count;
}

getCartTotal(){
  const {products} = this.state;

  var total = 0;

  products.map((product) => {
    total += (product.price * product.qty)
  })
  return total;
}

addProduct = () => {
  this.db
  .collection('products')
  .add({
    img : '',
    price: 933,
    qty: 1,
    title: 'Washing Machine'
  })
  .then((docRef) => {
    console.log(docRef);
  })
  .catch((error) => {
    console.log('Error: ', error);
  })
}

  render () {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <button onClick={this.addProduct} style ={{padding: 20, fontSize: 15}}>Add a product</button>
        <Cart
         products = {products}
         onIncreaseQuantity = {this.handleIncreaseQuantity} 
         onDecreaseQuantity = {this.handleDecreaseQuantity}
         onDeleteItem = {this.handleDeleteProduct}
         />
         {loading && <h1>Loading...</h1>}
         <div style = { {padding: 10, fontSize: 20} }>TOTAL : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;