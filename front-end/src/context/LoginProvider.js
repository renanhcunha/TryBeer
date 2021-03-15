import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const [user, setUser] = useState({});
  const [validUser, setValidUser] = useState(true);

  const providerValue = {
    user,
    setUser,
    validUser,
    setValidUser,
  };

  return (
    <LoginContext.Provider
      value={ providerValue }
    >
      { children }
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = { children: PropTypes.element.isRequired };

export default LoginProvider;
