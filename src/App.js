import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import './App.css';
import { Router } from "@/router";
import { AuthContext } from "@context";
import { isAuthCheck } from '@utils/isAuth';



function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('auth'));
  useEffect(() => {
    
    isAuthCheck();
  },[])
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