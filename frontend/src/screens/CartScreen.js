import React from 'react' 
import { useParams, useLocation } from 'react-router-dom'

const CartScreen = () => {
    const { id } = useParams()
    const location = useLocation()
    //const { quantity } = location.state
    //const id = props.match.params.id
    const quantity = location.search
        ? Number(location.search.split('=')[1])
        : 1
        console.log(quantity)
    return (
        <main className="row center">
            <h1>Cart</h1>
            <p>Add to cart</p>
            <p>Product: {id}</p>
            <p>Quantity: {quantity}</p>
        </main>    
    )
}

export default CartScreen  