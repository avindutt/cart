import React from 'react';

class CartItem extends React.Component{ //CartItem will inherit some features from class component.
    render(){
        return(
            <>
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{ fontSize: 25}}>Phone</div>
                    <div style={{ fontSize: 25, color: '#777'}}>Rs 999</div>
                    <div style={{ fontSize: 25, color: '#777'}}>Qty : 1</div>
                    <div className = "cart-item-actions">
                        {/* {Buttons} */}
                        <img alt='decrease' className="action-icons" src='https://cdn-icons-png.flaticon.com/512/56/56889.png'/>
                        <img alt='increase' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/3524/3524388.png'/>
                        <img alt='delete' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/3096/3096687.png'/>
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