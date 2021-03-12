import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import RegisterContext from '../context/RegisterContext';
import API from '../services/API';
import { signupDataValidator } from '../services/dataValidator';

function Register() {
  const history = useHistory();
  const { name, setName, email, setEmail, check, setCheck } = useContext(RegisterContext);
  const { password, setPassword, validUser, setValidUser } = useContext(RegisterContext);

  return (
    <div>
      <Input
        dataTestId="signub-name"
        name="Nome"
        field={ name }
        setField={ setName }
      />
      <Input
        dataTestId="signup-email"
        name="Email"
        field={ email }
        setField={ setEmail }
      />
      <Input
        dataTestId="signup-password"
        name="Senha"
        field={ password }
        setField={ setPassword }
        type="password"
      />
      <Checkbox
        dataTestId="signup-seller"
        name="Quero vender"
        field={ check }
        setField={ setCheck }
      />
      <SubmitButton
        name="CADASTRAR"
        disabled={ signupDataValidator(name, email, password) }
        dataTestId="signup-btn"
      />
      { !validUser && <p>Dados inválidos</p> }
    </div>
  );
}

export default Register;
