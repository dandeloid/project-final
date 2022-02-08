import React, { useState, useEffect, useRef } from "react"
// import { API_URL } from "utils/urls"
//import Loading from '../components/Loading'
import { useSelector, useDispatch } from "react-redux"
//import { addVinyl } from "../reducers/addVinyl"
import { BASE_URL } from "../utils/urls"

const UploadScreen = () => {
  const fileInput = useRef()
  const dispatch = useDispatch()
  // const name = useSelector((store) => store.shop.name)
  //const title = useSelector((store) => store.shop.title)
  // const genre = useSelector((store) => store.shop.genre)

  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [genre, setGenre] = useState("")
  const [price, setPrice] = useState("")
  const [released, setReleased] = useState("")
  const [selectedFile, setSelectedFile] = useState("")
  const [isFilePicked, setIsFilePicked] = useState(false)

  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0])
    setIsFilePicked(true)
    e.preventDefault()
  }

  const nameHandler = (e) => {
    setName({ name: e.target.value })
    e.preventDefault()
  }
  const titleHandler = (e) => {
    setTitle({ title: e.target.value })
    e.preventDefault()
  }
  const genreHandler = (e) => {
    setGenre({ genre: e.target.value })
    e.preventDefault()
  }
  const priceHandler = (e) => {
    setPrice({ price: e.target.value })
    e.preventDefault()
  }
  const releasedHandler = (e) => {
    setReleased({ released: e.target.value })
    e.preventDefault()
  }

  const handleSubmission = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("file", fileInput.current.files[0])
    formData.append("name", name.name)
    formData.append("title", title.title)
    formData.append("genre", genre.genre)
    formData.append("price", price.price)
    formData.append("released", released.released)
    // formData.append("nrStock", nrStock.nrStock)
    // formData.append("brand", brand.brand)
    // formData.append("rating", rating.rating)
    // formData.append("nrRating", nrRating.nrRating)
    //  formData.append("about", about.about)

    fetch(`${BASE_URL}api/products`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        console.log(data.name)
        //  dispatch(addVinyl.actions.setImage(data.image))
        // dispatch(addVinyl.actions.setName(data.name))
        // dispatch(addVinyl.actions.setTitle(data.title))
        // dispatch(addVinyl.actions.setPrice(data.price))
        // dispatch(addVinyl.actions.setPrice(data.genre))
        console.log("second console")
      })
  }

  return (
    <>
      <div className="container">
        <p className="title-text">Upload new vinlys to the shop</p>
        <div className="form-wrapper">
          <form method="POST" onSubmit={handleSubmission}>
            <div className="input-field">
              <div className="input-labels">
                <label htmlFor="name">Artist Name</label>
                <input type="text" name="name" onChange={nameHandler} />

                <label htmlFor="title">Album Title</label>
                <input type="text" name="genre" onChange={titleHandler} />

                <label htmlFor="genre">Genre</label>
                <input type="text" name="title" onChange={genreHandler} />

                <label htmlFor="price">Album Price</label>
                <input type="number" name="price" onChange={priceHandler} />

                <label htmlFor="released">Release date</label>
                <input type="text" name="released" onChange={releasedHandler} />

                <div>
                  <div className="">
                    <label htmlFor="file-name">
                      JPG, JPEG or PNG file size no more then 10MB
                    </label>
                    <input
                      className="btn-select"
                      type="file"
                      ref={fileInput}
                      name="file-name"
                      accept=".xml,.pdf,.jpeg,.png,"
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="btn-upload-row">
                    <button>UPLOAD FILE</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default UploadScreen
 