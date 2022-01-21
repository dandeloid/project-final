import React, {useEffect, useState } from 'react'
import Product from './Product'
import data from '../data.js' 

const HomeScreen = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }

        fetch(("http://localhost:3003/api/products"), options)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
            })
    }, [])
    console.log("data", data)
    console.log("test", products) ///<<<<< NEEED TO GET FETCH TO SHOW

    return (
        <div className="row center">
            {data.products.map(product => (
                <Product key={product._id} product={product} />
            ))}
        </div>    
    )
}

export default HomeScreen    