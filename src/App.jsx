import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RoutesHeaderFooter from './Routes/RoutesHeaderFooter';
import Login from './Pages/Login';

function App() {
  return (
    <>
      <RoutesHeaderFooter />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
