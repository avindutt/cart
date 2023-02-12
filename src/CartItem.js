import React from 'react';

class CartItem extends React.Component{ //CartItem will inherit some features from class component.
    constructor(){
        super(); //this will call the constructor of component class in React.
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
      //  this.increaseQuantity = this.increaseQuantity.bind(this); //binding this with increaseQuantity function otherwise value of this will be lost.
    }

    increaseQuantity = () => {
        //setState first form
        this.setState({
            qty : this.state.qty + 1
        }, () => {
            console.log('this', this.state);
        });

        // this.setState({
        //     qty : this.state.qty + 1
        // });

        // this.setState({
        //     qty : this.state.qty + 1
        // });

        //since three setState functions are being called but increment is only by 1 in qty object. This is because React only runs last function instead
        //of all the repeated ones. This process is called BATCHING. React re-renders the object only once.

        //setState second form
        // this.setState((prevState) => {
        //     return {
        //         qty : prevState.qty + 1
        //     }
        // });

        //In case of second form the results would be different if callbacks are repeated. Here also React is performing BATCHING but it also takes
        //care about the status of prevState every time the callback function is called. React keeps updating prevState everytime.
    }

    decreaseQuantity = () => {
        console.log('this', this.state);
        this.setState({
            qty : this.state.qty - 1
        });
    }

    render(){
        const{ price, title, qty } = this.state; //this is object destructuring(i.e. we are getting the values of price, tile, qty from this.state)
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
                        onClick={this.increaseQuantity} />
                        <img alt='decrease' className="action-icons" src='https://cdn-icons-png.flaticon.com/512/56/56889.png'
                        onClick={this.decreaseQuantity}/>
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