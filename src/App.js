import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


import './App.css';

import AppRouter from "./Components/AppRouter/AppRouter";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      fetch('http://localhost:8080/api/login', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('auth')
        }
      })
        .then((response) => {
            if(response.status === 200) {
              setIsAuth(true);
            }
          }
        )
      .catch(() => {
        console.log('error');
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AppRouter isAuth={isAuth} />
      </BrowserRouter>
    </AuthContext.Provider >
  );
}

export default App;