
import React, { useState } from "react"

const SearchBar = () => {
  const [search, setSearch] = useState("")
  // const [searchResultsShowing, setSearchResultsShowing] = useState(false)

  const onSearchHandle = (e) => {
    //setSearchResultsShowing(true)
    fetch(`http://localhost:3003/api/products/name?name=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setSearch(data)
        console.log(data)
      })

      // e.prevent.default()
  }

  return (
    <>
      <div>
        <form type="submit" onClick={() => onSearchHandle(search)}>
          <label htmlFor="searchByAuthor">
            <input
              id="searchByArtist"
              type="text"
              placeholder="Search by artist"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <button>SEARCH</button>
        </form>
        <div> {search} </div>
      </div>
    </>
  )
}

export default SearchBar
