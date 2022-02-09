import React from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { cart } from '../reducers/cart'

import Modal from '../components/Modal'

const CartScreen = () => {
    const dispatch = useDispatch()
    const inCart = useSelector((store) => store.cart.cart)

    const decrease = (product) => {
        dispatch(cart.actions.decrease({...product}))
    }
    const increase = (product) => {
        dispatch(cart.actions.increase({...product}))
    }
    const removeFromCart = (product) => {
        dispatch(cart.actions.removeItem({product}))
    }
    const removeAllFromCart = () => {
        dispatch(cart.actions.removeAllItems({}))
    }

    if (inCart.length === 0) {
        return (
            <main className="row center">
                <ul>
                    <h1>Empty cart, add items to cart.</h1>
                    <img className="medium" src="/assets/BlackEmptyCrate.jpeg" alt="Empty Crate" />
                </ul>
            </main>   
        )
    }
    return (
        <main>
            
            <Modal title="Sorry!" text="No more in stock." />
            <div className="screen-nav">
                <Link to="/" className="link-button">Back</Link>
                <Link to="/checkout" className="link-button">Checkout</Link>
            </div>
            <h1 className="added-cart">Added to cart</h1>

            {inCart.map(product => (
                <div key={product._id} className="in-cart-products">
                    <img className="x-small" src={product.image} alt={product.name} />
                    <p>Artist: {product.name}</p>
                    <p>Title: {product.title}</p>
                    <p>Quantity: {product.quantity}</p>
                    <div>
                        <button onClick={() => decrease(product)}>-</button>
                        <button onClick={() => increase(product)}>+</button>
                    </div>
                    <p>Total price: {(product.quantity * product.price)}</p>
                    <button onClick={() => removeFromCart(product)}>Remove</button>
                </div>
            ))}
            <div className="remove-all-container">
                <button className="remove-all-button" onClick={() => removeAllFromCart()}>Remove all</button>
            </div>
        </main>    
    )
}

export default CartScreen  