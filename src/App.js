import { BrowserRouter } from "react-router-dom";
import React, { useState } from 'react';
import './App.css';
import { Router } from "@/router";
import { AuthContext } from "@context";


function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('auth'));

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Router />
      </BrowserRouter>
    </AuthContext.Provider >
  );
}

export default App;