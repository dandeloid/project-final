import React from 'react' 
import { useSelector } from 'react-redux'

const PayScreen = () => {
    const inCart = useSelector((store) => store.cart.cart)
    const sumAllPrice = inCart.map(item => item.quantity * item.price).reduce((prev, curr) => prev + curr, 0)
    
    return (
        <main>
            <h1>PLS GIVE {sumAllPrice} MONEY!</h1>
        </main>    
    )
}

export default PayScreen  