import React, {useEffect, useState} from 'react'
import Product from '../components/Product'
//import Loading from '../components/Loading' 


const SearchBarTest = () => {

    const [search, setSearch] = useState("")

    let [searchResult, setSearchResult] = useState([])


    const onSearchHandle = (search) => {
        fetch(`http://localhost:3003/api/products/name?name=${search}`)
          .then((res) => res.json())
          .then((data) => {
            setSearchResult(data)
            console.log(searchResult)
          })
      }

      return (
        <main>
          <div>
          <input
              id="searchByArtist"
              type="text"
              placeholder="Search by artist"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => onSearchHandle(search)}> search </button>
          </div>
         
          )
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
    
    export default SearchBarTest
