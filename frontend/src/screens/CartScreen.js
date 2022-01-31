import React from 'react' 
import { useSelector } from 'react-redux'

const CartScreen = () => {

    const cart = useSelector((store) => store.cart.cart)

    if (cart.length === 0) {
        return <p>Empty Cart, buy stuff!</p>
    }

    console.log(cart)

    return (
        <main>
            <h1>Added to cart</h1>
            <p>Artist: {cart.name}</p>
            <p>Title: {cart.title}</p>
            <p>Quantity: {cart.quantity}</p>
            <p>Total price: {(cart.quantity * cart.price)}</p>
        </main>    
    )
}

export default CartScreen  