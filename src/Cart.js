import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {

    const { products } = props;
    return (
     <div className='cart'>
        {products.map((product) => {
            return (
                <CartItem 
                    product = {product} 
                    key = {product.id} 
                    onIncreaseQuantity = {props.onIncreaseQuantity} 
                    onDecreaseQuantity = {props.onDecreaseQuantity}
                    onDeleteItem = {props.onDeleteItem}
                    /> //Here product is the props that we have passed. We can pass anything as props i.e. a function or a boolean value etc.
                )
            })}
         </div>
    );
}

export default Cart;