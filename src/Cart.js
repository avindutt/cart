import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            products: [
                {
                    price : 999,
                    title : 'Watch',
                    qty : 10,
                    img : '',
                    id : 1
                },
                {
                    price : 999,
                    title : 'Disher',
                    qty : 1,
                    img : '',
                    id : 2
                },
                {
                    price : 999,
                    title : 'Machine',
                    qty : 1,
                    img : '',
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

    render(){
        const { products } = this.state;
        return (
            <div className='cart'>
                {products.map((product) => {
                    return (
                       <CartItem 
                           product = {product} 
                           key = {product.id} 
                           onIncreaseQuantity = {this.handleIncreaseQuantity} 
                           onDecreaseQuantity = {this.handleDecreaseQuantity}
                           onDeleteItem = {this.handleDeleteProduct}
                          /> //Here product is the props that we have passed. We can pass anything as props i.e. a function or a boolean value etc.
                    )
                })}
                </div>
        );
    }
}

export default Cart;