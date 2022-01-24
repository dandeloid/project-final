import React, {useEffect, useState } from 'react'
import Product from './Product'
import Loading from './Loading' 

const HomeScreen = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
        setLoading(true)
        fetch(("http://localhost:3003/api/products"), options)           
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {loading  ? (
               <Loading/> 
            ) : (
                <div className="row center">       
                    {products.map(product => (
                        <Product key={product._id} product={product} />
                    ))}
                </div>  
            )}
        </div>
    )
}

export default HomeScreen    