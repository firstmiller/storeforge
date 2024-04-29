import {BrowserRouter, Route,  Routes, Navigate} from "react-router-dom";
import React from 'react';

import './App.css';

import Main from './Pages/Main';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Recovery from './Pages/Recovery';
import { HashRouter } from 'react-router-dom';

import ChangePassword from './Pages/ChangePassword';

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route exact path = "/" element ={<Main/>}/>
          <Route path = "/login" element ={<Login/>}/>
          <Route path = "/register" element ={<Register/>}/>
          <Route path = "/recovery" element ={<Recovery/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
