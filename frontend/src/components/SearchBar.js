import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { BASE_URL } from "../utils/urls"

import { shop } from '../reducers/shop'
import Loading from '../components/Loading'


const SearchBar = () => {
  const loading = useSelector((store) => store.shop.loading)
  const [search, setSearch] = useState("")
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const checkKey = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      onSearchHandle(e)
    }
  }

  const onSearchHandle = () => {
    //fetch(`http://localhost:3003/api/products/name?name=${search}`)
    dispatch(shop.actions.setLoading(true))
    fetch(`${BASE_URL}api/products/search?q=${search}`)
      .then((response) => response.json())
      .then((data) => {
        if (search.length > 0){
          dispatch(shop.actions.setItems(data.response))
          dispatch(shop.actions.setSearch(search))
          dispatch(shop.actions.setLoading(false))
          navigate("/")
        }
      })
  }

  return (  
    <>
      {loading ? (
        <Loading />
        ) : (
        <>
          <div>
              <label htmlFor="searchByArtist">
                <input
                  id="searchByArtist"
                  type="text"
                  placeholder="Search by artist"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => checkKey(e)}
                />
              </label>
              <button onClick={() => onSearchHandle()}>SEARCH</button>
          </div>
        </>
      )}
    </>
  )
}

export default SearchBar
