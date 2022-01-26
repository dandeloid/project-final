import React, {useEffect} from 'react'
import Product from './Product'
import Loading from './Loading' 

import { showShop } from "../reducers/shop"
import { useSelector, useDispatch } from 'react-redux'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const products = useSelector((store) => store.shop.items)
    const loading = useSelector((store) => store.shop.loading)
   
    useEffect(() => {
        dispatch(showShop())
    }, [dispatch])

    return (
        <main>
            {loading ? (
               <Loading/> 
            ) : (
                <div className="row center">       
                    {products.map(product => (
                        <Product key={product._id} product={product} />
                    ))}
                </div>  
            )} 
        </main>
    )
}

export default HomeScreen    