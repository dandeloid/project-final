import React from 'react' 
//import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const PayScreen = () => {
    //const inCart = useSelector((store) => store.cart.cart)
    //const sumAllPrice = inCart.map(item => item.quantity * item.price).reduce((prev, curr) => prev + curr, 0)
    
    return (
        <main>
            <div className="screen-nav">
                <Link to="/checkout" className="link-button">Back to Checkout</Link>
            </div>
            <div className="row center">
                <ul>
                    <h1 className="style-text">Thanks you for shopping at Vinyl Cakes!</h1>
                    <img src="/assets/cat-gato.gif" alt="Turntable Cat" /> 
                </ul>
            </div>
        </main>    
    )
}

export default PayScreen  