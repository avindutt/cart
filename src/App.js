import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products: [
            {
                price : 1000,
                title : 'Watch',
                qty : 1,
                img : 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
                id : 1
            },
            {
                price : 500,
                title : 'Machine',
                qty : 1,
                img : 'https://images.unsplash.com/photo-1666214282554-39104df48982?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bWFjaGluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                id : 2
            },
            {
                price : 200,
                title : 'Laptop',
                qty : 1,
                img : 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                id: 3
            }
        ]
    }
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

  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar
        count = {this.getCartCount()}
        />
        <Cart
         products = {products}
         onIncreaseQuantity = {this.handleIncreaseQuantity} 
         onDecreaseQuantity = {this.handleDecreaseQuantity}
         onDeleteItem = {this.handleDeleteProduct}
         />

         <div style = { {padding: 10, fontSize: 20} }>TOTAL : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;