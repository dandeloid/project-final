import React, {useEffect, useState} from 'react'
import Product from '../components/Product'
//import Loading from '../components/Loading' 

import { shop } from "../reducers/shop"
import { showShop } from "../reducers/shop"
import { useSelector, useDispatch } from "react-redux"
import Modal from '../components/Modal'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const products = useSelector((store) => store.shop.items)
    const search = useSelector((store) => store.shop.search)
    const genre = useSelector((store) => store.shop.genre)
    //const loading = useSelector((store) => store.shop.loading)

    const [selectedGenre, setSelectedGenre] = useState(false)

    useEffect(() => {
        if (search === "" && selectedGenre === false){
          dispatch(shop.actions.setGenre("ALL VINYLS"))
          dispatch(showShop())
        }
    }, [dispatch, search, selectedGenre])

    const handleInput = (props) => {
        fetch(`http://localhost:3003/api/products/${props}`)
          .then((res) => res.json())
          .then((data) => {
            setSelectedGenre(true)
            dispatch(shop.actions.setSearch(""))
            dispatch(shop.actions.setItems(data))            
            if (props === "genre/?genre=pop"){
              dispatch(shop.actions.setGenre("POP"))
            } else if (props === "genre/?genre=hip") {
              dispatch(shop.actions.setGenre("HIP HOP"))
            } else if (props === "genre/?genre=rock") {
              dispatch(shop.actions.setGenre("ROCK"))
            } else if (props === "genre/?genre=electronic") {
              dispatch(shop.actions.setGenre("ELECTRONIC"))
            } else if (props === "") {
              dispatch(shop.actions.setGenre("ALL VINYLS"))
            }
          })
      }

      return (
        <main>
          <Modal title="Hello!" text="Welcome to the Vinyl Shop"/>
          <div className="genre-container">
            <div className="genre-button" onClick={() => handleInput("")}>
              {/* <img src="/assets/all.png" className="small" alt="vinyl cover" /> */}
              <p> GET'EM ALL</p>
            </div>
            <div className="genre-button" onClick={() => handleInput("genre/?genre=pop")}>
              {/* <img src="/assets/pop.png" className="small" alt="vinyl cover" /> */}
              <p> POP</p>
            </div>
            <div className="genre-button" onClick={() => handleInput("genre/?genre=hip")}>
              {/* <img src="/assets/hiphop.png" className="small" alt="vinyl cover" /> */}
              <p> HIP HOP</p>
            </div>
            <div className="genre-button" onClick={() => handleInput("genre/?genre=rock")}>
              {/* <img src="/assets/rock.png" className="small" alt="vinyl cover" /> */}
              <p> ROCK</p>
            </div>
            <div className="genre-button" onClick={() => handleInput("genre/?genre=electronic")}>
              {/* <img src="/assets/electronic.png" className="small" alt="vinyl cover" /> */}
              <p> ELECTRONIC</p>
            </div>
          </div>

          {search === "" && (
            <div className="genre-header"> 
              <h1>
                {genre}
              </h1>
            </div>
          )}

          {search.length > 0 && (
            <div className="genre-header"> 
              <h1>
                SEARCH: {search}
              </h1>
            </div>
          )}
          
          <section className="row center">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </section>

        </main>
      )
    }
    
    export default HomeScreen
