import {BrowserRouter, Route,  Routes, Navigate} from "react-router-dom";
import React from 'react';

import './App.css';

import Main from './Pages/Main';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Recovery from './Pages/Recovery';
import { HashRouter } from 'react-router-dom';

import ChangePassword from './Pages/ChangePassword';
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element ={<Main/>}/>
          <Route path = "/login" element ={<Login/>}/>
          <Route path = "/register" element ={<Register/>}/>
          <Route path = "/recovery" element ={<Recovery/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
