import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

import Rating from '../components/Rating'
import Loading from '../components/Loading'
import Modal from '../components/Modal'

import { showProduct } from "../reducers/shop"
import { cart } from '../reducers/cart'
//import { shop } from "../reducers/shop"
import { useSelector, useDispatch } from 'react-redux'

const ProductScreen = () => {
    const { id } = useParams()
    const [quantity, setQuantity] = useState(1)
    const [quantityCart, setQuantityCart] = useState("")
    const product = useSelector((store) => store.shop.item)
    const inCart = useSelector((store) => store.cart.cart)
    const loading = useSelector((store) => store.shop.loading)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(showProduct(id))
    }, [dispatch, id])

    
    if (product.length === 0) {
        return (
            <div className="row center">
                <ul>
                    <h1>Product Not Found!</h1>
                    <img className="medium" src="/assets/BlackEmptyCrate.jpeg" alt="Empty Crate" />
                </ul>
            </div>   
        )
    }

    const addToCart = () => {  
        const productExist = inCart.find((item) => item._id === product.response._id)
        
        if (productExist){
            const sumQuantity = parseInt(quantity)+parseInt(productExist.quantity)
                    
            if (sumQuantity > productExist.nrStock){
                //alert(`Sry not enough in stock :( You have ${productExist.quantity}/${productExist.nrStock} in cart.`)  
                setQuantityCart(`${productExist.quantity}/${productExist.nrStock}`)
                dispatch(cart.actions.setModalOn(true))
            } else {
                dispatch(cart.actions.addItem({...product.response, quantity}))
                navigate('/cart')
            } 
        } else {
            dispatch(cart.actions.addItem({...product.response, quantity}))
            navigate('/cart')
        }
    }

     return (
        <main>     
            {loading ? (
                <Loading /> 
            ) : (
                <>
                <Modal title="Sorry!" text={"You already have " + quantityCart + " in your cart."}/>
                <Link to="/" className="link-button">Back</Link>
                <div className="row top"> 
                    <div className="column-2">  
                        <img className="large" src={product.response.image} alt={product.response.name} /> 
                    </div>
                    <div className="column-1">
                        <ul>
                            <li>
                                <h1>{product.response.name}</h1>
                                <p>{product.response.title}</p>
                                <p>Label: {product.response.brand}</p>
                            </li>
                            <li>
                                <Rating rating={product.response.rating} nrRating={product.response.nrRating} />
                            </li>
                            <li>Price: {product.response.price} SEK</li>
                            <li>Description:<p>{product.response.description}</p></li>
                        </ul>
                    </div>
                    <div className="column-1">
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <div className="row">
                                        <div>Price</div>
                                        <div className="price">{product.response.price} SEK</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Status</div>
                                        {product.response.nrStock > 0 ? (
                                            <span className="success">{product.response.nrStock} x In Stock</span>
                                        ) : ( 
                                            <span className="error">Not In Stock</span>
                                        )}
                                    </div>
                                </li>
                                {product.response.nrStock > 0 &&(
                                    <>
                                        <li>
                                            <div className="row">
                                                <div>Quantity</div>
                                                <div>
                                                    <select 
                                                        value={quantity} 
                                                        onChange={(event) => setQuantity(event.target.value)} 
                                                    >
                                                    {[...Array(product.response.nrStock).keys()].map(
                                                        (x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        )
                                                    )}
                                                    </select>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <button onClick={() => addToCart()}>Add</button>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                </>
            )} 
        </main> 
    )
}

export default ProductScreen    