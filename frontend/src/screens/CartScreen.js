import React from 'react' 
import { useSelector, useDispatch } from 'react-redux'

import { cart } from '../reducers/cart'

const CartScreen = () => {


    const inCart = useSelector((store) => store.cart.cart)

    const dispatch = useDispatch()

    console.log(cart)

    const removeFromCart = (product) => {
        dispatch(cart.actions.removeItem({product}))
    }


    if (inCart.length === 0) {
        return <p>Empty Cart, add items to cart!</p>
    }
    return (
        <main>
            {inCart.map(product => (
                <div key={product._id}>
                <h1>Added to cart</h1>
                <p>Artist: {product.name}</p>
                <p>Title: {product.title}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Total price: {(product.quantity * product.price)}</p>
                <button onClick={() => removeFromCart(product)}>Remove</button>
            </div>
            ))}
        </main>    
    )
}

export default CartScreen  