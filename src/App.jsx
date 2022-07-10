import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import Login from './Pages/Login';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
