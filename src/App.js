import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from 'react';

import './App.css';
import AppRouter from "./Components/AppRouter/AppRouter";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [] )

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider >
  );
}

export default App;