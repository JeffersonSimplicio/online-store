import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/registration" element={<Login />} />
    </Routes>
  );
}

export default App;
