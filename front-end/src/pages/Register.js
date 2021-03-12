import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import RegisterContext from '../context/RegisterContext';
import API from '../services/API';
import { signupDataValidator } from '../services/dataValidator';
import { setUserData } from '../services/localStorage';

function Register() {
  const history = useHistory();
  const { name, setName, email, setEmail, check, setCheck } = useContext(RegisterContext);
  const { password, setPassword } = useContext(RegisterContext);
  const [badReq, setBadReq] = useState(false);

  const handleRegister = async () => {
    const user = await API.addUser(name, email, password, check);
    setUserData(user);
    if (user) {
      if (check) {
        history.push('/admin/orders');
      } else { history.push('/products'); }
      return;
    }
    setBadReq(true);
  };

  return (
    <div>
      <Input id="signup-name" name="Nome" field={ name } setField={ setName } />
      <Input id="signup-email" name="Email" field={ email } setField={ setEmail } />
      <Input
        id="signup-password"
        name="Senha"
        field={ password }
        setField={ setPassword }
        type="password"
      />
      <Checkbox
        id="signup-seller"
        name="Quero vender"
        field={ check }
        setField={ setCheck }
      />
      <SubmitButton
        name="Cadastrar"
        onClick={ handleRegister }
        disabled={ signupDataValidator(name, email, password) }
        id="signup-btn"
      />
      { badReq && <p>E-mail already in database.</p> }
    </div>
  );
}

export default Register;
