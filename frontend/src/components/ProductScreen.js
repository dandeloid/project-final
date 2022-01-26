import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'


import Rating from './Rating'
import Loading from './Loading'

import { showProduct } from "../reducers/shop"
import { useSelector, useDispatch } from 'react-redux'

const ProductScreen = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)
    const product = useSelector((store) => store.shop.item)
    const loading = useSelector((store) => store.shop.loading)

    useEffect(() => {
        dispatch(showProduct(id))
    }, [dispatch, id])

    //THIS IS NOT WORKING AFTER MOVING PRODUCT STATE TO STORE
/*     if (!product) {
        return (
            <div className="row center">
                <h1>Product Not Found!</h1>
            </div>   
        )
    } */

    //NEEDS FIXING
/*     const addToCart = () => {
        console.log(id, quantity)
        //props.history.push(`/cart/${id}?quantity=${quantity}`)
    } */

     return (
        <main>     
            {loading ? (
                <Loading/> 
            ) : (
                <>
                <Link className="back-button" to="/">Back</Link>
                <div className="row top"> 
                    <div className="column-2">  
                        <img className="large" src={process.env.PUBLIC_URL + product.image} alt={product.name} /> 
                    </div>
                    <div className="column-1">
                        <ul>
                            <li>
                                <h1>{product.name}</h1>
                                <p>{product.title}</p>
                                <p>Label: {product.brand}</p>
                            </li>
                            <li>
                                <Rating rating={product.rating} nrRating={product.nrRating} />
                            </li>
                            <li>Price: ${product.price}</li>
                            <li>Description:<p>{product.description}</p></li>
                        </ul>
                    </div>
                    <div className="column-1">
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <div className="row">
                                        <div>Price</div>
                                        <div className="price">${product.price}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Status</div>
                                        {product.nrStock > 0 ? (
                                            <span className="success">In Stock</span>
                                        ) : ( 
                                            <span className="error">Not In Stock</span>
                                        )}
                                    </div>
                                </li>
                                {product.nrStock > 0 &&(
                                    <>
                                        <li>
                                            <div className="row">
                                                <div>Quantity</div>
                                                <div>
                                                    <select 
                                                        value={quantity} 
                                                        onChange={(event) => setQuantity(event.target.value)} 
                                                    >
                                                    {[...Array(product.nrStock).keys()].map(
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
    {/*                                         <button 
                                                className="primary block"
                                                onClick={() => addToCart(id, quantity)}
                                            >
                                                Add to Cart
                                            </button> */}
                                            <Link to={`/cart/${id}?quantity=${quantity}`}>BUTTON</Link>
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