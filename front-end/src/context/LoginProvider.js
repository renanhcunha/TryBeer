import React, { useState } from 'react';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const providerValue = {
    email,
    setEmail,
    password,
    setPassword,
  }

  return (
    <LoginContext.Provider
      value={ providerValue }
    >
      { children }
    </LoginContext.Provider>
  );
}

export default LoginProvider;
