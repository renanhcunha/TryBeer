import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RegisterContext from './RegisterContext';

function RegisterProvider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  const [validUser, setValidUser] = useState(true);

  const providerValue = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    check,
    setCheck,
    validUser,
    setValidUser,
  };

  return (
    <RegisterContext.Provider
      value={ providerValue }
    >
      { children }
    </RegisterContext.Provider>
  );
}

RegisterProvider.propTypes = { children: PropTypes.element.isRequired };

export default RegisterProvider;
