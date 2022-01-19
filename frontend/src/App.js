import React from 'react'

import data from './data' // Products Data

const App = () => {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/Main">The Design Shop</a>
        </div>
        <div>
          <a href="/Cart">Cart</a>
          <a href="/Contact">Contact</a>
        </div>
      </header>
      <main>

        <div className="row center">
          {/* Maps Product Cards */}
          {data.products.map(product => (
            <div key={product._id} className="card">
              <a href={`/product/${product._id}`}>
               <img className="medium" src={product.image} alt={product.name} />
              </a>
              <div className="card-body">
                <a href={`/product/${product._id}`}>
                  <h2>{product.name}</h2>
                </a>
                <div className="rating">
                  <span>
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </span>
                </div>
                <div className="price">{product.price}</div>
              </div>
            </div>
          ))}
        </div>

      </main>
      <footer className="row center">Daniel & Pinar</footer>
    </div>
  );
}

export default App;
