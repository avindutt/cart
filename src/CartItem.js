import React from 'react';

const CartItem = (props) => { //CartItem will inherit some features from class component.
        //console.log('this.props', this.props);
        const{ price, title, qty } = props.product; //this is object destructuring(i.e. we are getting the values of price, tile, qty from this.state)
        const{ product, onIncreaseQuantity, onDecreaseQuantity, onDeleteItem }  = props;
        return(
            <>
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} src={product.img}/>
                </div>
                <div className='right-block'>
                    <div style={{ fontSize: 25}}>{title}</div>
                    <div style={{ fontSize: 25, color: '#777'}}>Rs {price} </div>
                    <div style={{ fontSize: 25, color: '#777'}}>Qty : {qty} </div>
                    <div className = "cart-item-actions">
                        {/* {Buttons} */}
                        <img alt='increase' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/3524/3524388.png'
                        onClick={() => onIncreaseQuantity(product)} />
                        <img alt='decrease' className="action-icons" src='https://cdn-icons-png.flaticon.com/512/56/56889.png'
                        onClick={() => onDecreaseQuantity(product)}/>
                        <img alt='delete' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/3096/3096687.png'
                        onClick={() => onDeleteItem(product.id)}/>
                    </div>
                </div>
            </div>
            </>
        );
};

const styles = {
    image: {
        height: 150,
        width: 150,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;