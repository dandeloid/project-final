import React from 'react'
import Product from './components/Product'
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
           <Product key={product._id} product= {product}/>
          ))}
        </div>

      </main>
      <footer className="row center">Daniel & Pinar</footer>
    </div>
  );
}

export default App;
