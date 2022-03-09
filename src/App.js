import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import Navigation from './components/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { Cart } from './components/Cart';
import CartProvider from './context/CartContext';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/category/:id" element={<ItemListContainer />}></Route>
              <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
        </BrowserRouter>
      </CartProvider>
    </>     
  );
}

export default App;
