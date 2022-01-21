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

        fetch(('https://a-book-api-2.herokuapp.com/books'), options)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
            })
    }, [])
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