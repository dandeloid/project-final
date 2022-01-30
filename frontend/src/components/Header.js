import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="row">
            <div>
                <Link to="/" className="brand">The Vinyl Shop</Link>
            </div>
            <div>
                <Link to="/Cart">Cart</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </header>    
    )
}

export default Header  






