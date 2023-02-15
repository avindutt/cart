import React from 'react';

class CartItem extends React.Component{ //CartItem will inherit some features from class component.
    render(){
        console.log('this.props', this.props);
        const{ price, title, qty } = this.props.product; //this is object destructuring(i.e. we are getting the values of price, tile, qty from this.state)
        return(
            <>
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{ fontSize: 25}}>{title}</div>
                    <div style={{ fontSize: 25, color: '#777'}}>Rs {price} </div>
                    <div style={{ fontSize: 25, color: '#777'}}>Qty : {qty} </div>
                    <div className = "cart-item-actions">
                        {/* {Buttons} */}
                        <img alt='increase' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/3524/3524388.png'
                        onClick={() => this.props.onIncreaseQuantity(this.props.product)} />
                        <img alt='decrease' className="action-icons" src='https://cdn-icons-png.flaticon.com/512/56/56889.png'
                        onClick={() => this.props.onDecreaseQuantity(this.props.product)}/>
                        <img alt='delete' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/3096/3096687.png'
                        onClick={() => this.props.onDeleteItem(this.props.product.id)}/>
                    </div>
                </div>
            </div>
            </>
        );
    }
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