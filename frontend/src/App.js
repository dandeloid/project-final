import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import shop from './reducers/shop'

import ProductScreen from './components/ProductScreen'
import HomeScreen from './components/HomeScreen'
import NotFound from './components/NotFound'

////////////////
const reducer = combineReducers({
  shop: shop.reducer,
})

const store = configureStore({ reducer })
///////////////

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter> 
        <div className="grid-container">
          <header className="row">
            <div>
              <a className="brand" href="/">The Design Shop</a>
            </div>
            <div>
              <a href="/Cart">Cart</a>
              <a href="/Contact">Contact</a>
            </div>
          </header>
          <main>
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <footer className="row center">Daniel & Pinar</footer>
        </div>
      </BrowserRouter>
    </Provider> 
  );
}

export default App;
