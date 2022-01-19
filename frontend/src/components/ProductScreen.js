import React from 'react'
import { useParams, Link } from 'react-router-dom'

import Rating from './Rating'
import data from '../data'

const ProductScreen = () => {
    const { id } = useParams()
    const product = data.products.find((p) => p._id === String(id))

    if (!product) {
        return (
            <div className="row center">
                <h1>Product Not Found!</h1>
            </div>   
        )
    }
     return (
        <div> 
            <Link to="/">Back</Link>
            <div className="row top"> 
                <div className="column-2">  
                    <img className="large" src={process.env.PUBLIC_URL + product.image} alt={product.name} /> 
                </div>
                <div className="column-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
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
                            <li>
                                <button className="primary block">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default ProductScreen    