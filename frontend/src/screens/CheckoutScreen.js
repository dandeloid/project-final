import React from 'react' 
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CheckoutScreen = () => {
    const inCart = useSelector((store) => store.cart.cart)

    const sumAllPrice = inCart.map(item => item.quantity * item.price).reduce((prev, curr) => prev + curr, 0)

    return (
        <main>
            <Link to="/cart" className="link-button">Back</Link>
            <h1>Total price:</h1>
            <p>{sumAllPrice} SEK</p>

            <h1>Shipping details:</h1>
            <section>
                <form>
                    <div>
                        <ul>
                        <label htmlFor="name">Your name</label>
                            <input type="text" required id="name" name="name" placeholder="Write your name..."/>
                        <label htmlFor="name">Your address</label>
                            <input type="text" required id="address" name="address" placeholder="Write your address..."/>
                        <label htmlFor="name">Your postcode</label>
                            <input type="text" required id="postcode" name="postcode" placeholder="Write your postcode..."/>
                        <label htmlFor="email">Your E-mail</label>
                            <input type="email" required id="email" name="email" placeholder="Write your E-mail..."/>
                        </ul>
                    </div>       
                <h3>Newsletter</h3>
                <div>
                <input type="radio" id="letter-yes" name="newsletter" value="yes"/>
                    <label htmlFor="newsletter">Yes</label>
                <input type="radio" id="letter-no" name="newsletter" value="no"/>  
                    <label htmlFor="newsletter">No</label>
                </div>
                <Link to="/pay" className="link-button" type="submit">PAY</Link>
                </form>
            </section>
        </main>    
    )
}

export default CheckoutScreen  