import React, { useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import LoginContext from '../context/LoginContext';
import API from '../services/API';
import { setUserData } from '../services/localStorage';
import { loginDataValidator } from '../services/dataValidator';

function Login() {
  const history = useHistory();
  const { email, setEmail, password, setPassword } = useContext(LoginContext);
  const [validUser, setValidUser] = useState(true);

  const handleHome = (insertedEmail, insertedPassword) => {
    const user = API.getUserData(insertedEmail, insertedPassword);

    if (user) {
      setUserData(user);
      if (user.role === 'administrador') {
        history.push('/orders');
      } else {
        history.push('/products');
      }
    }
    setValidUser(false);
  };

  return (
    <div>
      <Input
        dataTestId="email-input"
        name="Email"
        field={ email }
        setField={ setEmail }
      />
      <Input
        dataTestId="password-input"
        name="Senha"
        field={ password }
        setField={ setPassword }
        type="password"
      />
      <SubmitButton
        onClickFunction={ () => handleHome(email, password) }
        name="Entrar"
        disabled={ loginDataValidator(email, password) }
        dataTestId="signin-btn"
      />
      { !validUser && <p>Usuário não cadastrado ou senha inválida.</p> }
      <Link to="/register" data-testid="no-account-btn">Ainda nao tenho conta</Link>
    </div>
  );
}

export default Login;
