import React, {useState} from 'react'

const SearchBarTest = () => {
    let [search, setSearch] = useState([])
    let [searchResult, setSearchResult] = useState("")

    const onSearchHandle = (search) => {

      console.log(search)
          fetch(`http://localhost:3003/api/products/name?name=${search}`)
          .then((res) => res.json())
          .then((data) => {
            setSearchResult(data)
            console.log(searchResult)
          })
      }

      return (
        <>
        <main>
          <label htmlFor="searchByArtist">
          <input
              id="searchByArtist"
              type="text"
              placeholder="Search by artist"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
            <button onClick={() => onSearchHandle(search)}> search </button>
        </main>
        </> 
      )
    }
    
    export default SearchBarTest
