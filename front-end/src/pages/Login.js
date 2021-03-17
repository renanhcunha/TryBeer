import React, { useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import UserContext from '../context/UserContext';
import API from '../services/API';
import { setUserData } from '../services/localStorage';
import { loginDataValidator } from '../services/dataValidator';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser, validUser, setValidUser } = useContext(UserContext);

  const handleHome = async (insertedEmail, insertedPassword) => {
    const user = await API.createToken(insertedEmail, insertedPassword);

    if (user) {
      setUserData(user);
      setUser(user);
      if (user.role === 'administrator') {
        history.push('/admin/orders');
      } else if (user.role === 'client') {
        history.push('/products');
      }
    }
    setValidUser(false);
  };

  return (
    <div>
      <Input
        id="email-input"
        name="Email"
        field={ email }
        setField={ setEmail }
      />
      <Input
        id="password-input"
        name="Senha"
        field={ password }
        setField={ setPassword }
        type="password"
      />
      <SubmitButton
        onClick={ () => handleHome(email, password) }
        name="Entrar"
        disabled={ loginDataValidator(email, password) }
        id="signin-btn"
      />
      { !validUser && <p>Usuário não cadastrado ou senha inválida.</p> }
      <Link to="/register" data-testid="no-account-btn">Ainda não tenho conta</Link>
    </div>
  );
}

export default Login;
