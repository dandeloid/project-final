import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { shop } from './reducers/shop'

import Header from './components/Header'
import Footer from './components/Footer'
import ProductScreen from './components/ProductScreen'
import HomeScreen from './components/HomeScreen'
import CartScreen from './screens/CartScreen'
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
          <Header />
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart/:id" element={<CartScreen />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider> 
  );
}

export default App;
