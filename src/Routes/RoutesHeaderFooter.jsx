import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Main from '../Pages/Main';
import ShoppingCart from '../Pages/ShoppingCart';

function RoutesHeaderFooter() {
  return (
    <>
      <Header />
      <h1>RoutesHeaderFooter</h1>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/details:idProduct" element={<Main />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </>
  );
}

export default RoutesHeaderFooter;
