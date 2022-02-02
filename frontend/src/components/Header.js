import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SearchBarTest from './SearchBarTest'


const Header = () => {

    const cart = useSelector((store) => store.cart.cart)

    return (
        <header className="row">
            <div>
                <Link to="/" className="brand">The Vinyl Shop</Link>
            </div>
            <SearchBarTest/> 
            <div>
                <span className="in-cart"> {cart.length} </span>
                <Link to="/Cart">Cart</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </header>    
    )
}

export default Header  






