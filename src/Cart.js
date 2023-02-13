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
    render(){
        const { products } = this.state;
        return (
            <div className='cart'>
                {products.map((product) => {
                    return (
                       <CartItem 
                           product = {product} 
                           key={product.id} 
                          /> //Here product is the props that we have passed. We can pass anything as props i.e. a function or a boolean value etc.
                    )
                })}
                </div>
        );
    }
}

export default Cart;