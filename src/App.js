import {BrowserRouter, Route,  Routes, Navigate} from "react-router-dom";
import React from 'react';

import './App.css';

import Main from './Pages/Main';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Recovery from './Pages/Recovery';
import ChangePassword from './Pages/ChangePassword';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
          <Route path = "/" element ={<Main/>}/>
          <Route path = "/login" element ={<Login/>}/>
          <Route path = "/register" element ={<Register/>}/>
          <Route path = "/recovery" element ={<Recovery/>}/>
          <Route path="*" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
