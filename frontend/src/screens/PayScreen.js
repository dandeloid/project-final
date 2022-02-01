import React from 'react' 
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const PayScreen = () => {
    const inCart = useSelector((store) => store.cart.cart)
    const sumAllPrice = inCart.map(item => item.quantity * item.price).reduce((prev, curr) => prev + curr, 0)
    
    return (
        <main>
            <Link to="/cart" className="link-button">Back</Link>
            <h1>PLS GIVE {sumAllPrice} MONEY!</h1>
        </main>    
    )
}

export default PayScreen  