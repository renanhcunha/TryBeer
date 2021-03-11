import React from 'react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import LoginContext from '../context/LoginContext';
import API from '../services/API';
import { setUserData } from '../services/localStorage';

function Login() {
  const { email, setEmail, password, setPassword } = useContext(LoginContext);
  const [validUser, setValidUser] = useState(true);

  const history = useHistory();

  const handleDisabled = (email, password) => {
    const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{3})$/i;
    const emailIsValid = emailRegex.test(email);
    const passwordIsValid = password.length >= 6;

    return emailIsValid && passwordIsValid ? false : true;
  }

  const handleHome = (email, password) => {
    const { exists, token } = API.getUserRole(email, password);
    if (exists !== false) {
      const { name, email, role } = exists;
      const formattedUser = {
        user: {
          name,
          email,
          token,
          role,
        }
      }

      setUserData(formattedUser);
      if (role === 'administrador') {
        history.push('/orders');
      } else {
        history.push('/products');
      }
    }

    setValidUser(false);
  }

  return (
    <div>
      <Input
        dataTestId='email-input'
        name='Email'
        field={ email }
        setField={ setEmail }
      />
      <Input
        dataTestId='password-input'
        name='Password'
        field={ password }
        setField={ setPassword }
        type='password'
      />
      <SubmitButton
        onClick={ () => handleHome(email, password) }
        name='Entrar'
        disabled={ handleDisabled(email, password) }
        dataTestId='signin-btn'
      />
      { !validUser && <p>Usuário não cadastrado ou senha inválida.</p> }
      <Link to='/register' data-testid='no-account-btn'>Ainda nao tenho conta</Link>

    </div>
  )
}

export default Login;
