import React, { useEffect, useState } from "react"
import Product from "../components/Product"
//import Loading from "../components/Loading"

import { showShop } from "../reducers/shop"
import { useSelector, useDispatch } from "react-redux"

const HomeScreen = () => {
  const dispatch = useDispatch()
  const products = useSelector((store) => store.shop.items)
  // const loading = useSelector((store) => store.shop.loading)
  const [selection, setSelection] = useState("")
  const [selectedGenre, setSelectedGenre] = useState([])

  useEffect(() => {
    dispatch(showShop())
  }, [dispatch])

  const fetchGenre = (selection) => {
    fetch(`http://localhost:3003/api/products/${selection}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("selection1", selection)
        console.log(data)
        setSelectedGenre(data)
      })
  }

  const handleInput = (e) => {
    // setSelection("")
    //setSelectedGenre([])
    setSelection(e.target.value)
    fetchGenre(selection)
    e.preventDefault()
  }

  //   const onSetSelectionChange = (e) => {
  //     setSelection(e.target.value)
  //     console.log("selection", selection)
  //   }

  return (
    <main>
      {/* <form onSubmit={handleInput}>
        <select type="text" value={selection} onChange={onSetSelectionChange}>
          <option value="">Search by Genre</option>
          <option value="genre/?genre=pop">Pop</option>
          <option value="genre/?genre=hiphop">Hip Hop</option>
          <option value="genre/?genre=rock">Rock</option>
          <option value="genre/?genre=electronic">Electronic</option>
          <option value="">Get'em all</option>
        </select>
        <button>Search</button>
      </form> */}

      {/* type="text" value={selection} onChange={onSetSelectionChange} */}
      <div className="genre-container">
        <button onClick={handleInput} value="">
          Get'em all
        </button>
        <button type="submit" onClick={handleInput} value="genre/?genre=pop">
          Pop
        </button>
        <button onClick={handleInput} value="genre/?genre=hip">
          Hip Hop
        </button>
        <button onClick={handleInput} value="genre/?genre=rock">
          Rock
        </button>
        <button onClick={handleInput} value="genre/?genre=electronic">
          Electronic
        </button>
      </div>

      {/* <div>
        <button>Get'em all</button>
        <button type="image" onClick={handleInput} value="genre/?genre=pop">
          <img src="/assets/pop.png" height="100" width="100" />
          <p> POP</p>
        </button>
        <button type="button" onClick={handleInput} value="genre/?genre=hip">
          <img src="/assets/hiphop.png" height="100" width="100" />
          <p> HIP HOP</p>
        </button>
        <button type="button" onClick={handleInput} value="genre/?genre=rock">
          <img src="/assets/rock.png" height="100" width="100" />
          <p> ROCK</p>
        </button>
        <button
          type="button"
          onClick={handleInput}
          value="genre/?genre=electronic"
        >
          <img src="/assets/electronic.png" height="100" width="100" />
          <p> ELECTRONIC</p>
        </button>
      </div> */}

      {selectedGenre.length === 0 && (
        <section className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </section>
      )}
      {selectedGenre.length !== 0 && (
        <section className="row center">
          {selectedGenre.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </section>
      )}
    </main>
  )
}

export default HomeScreen
