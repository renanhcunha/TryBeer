import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import LoginContext from '../context/LoginContext';
import API from '../services/API';
import { getUserData } from '../services/localStorage';

function Profile() {
  const { user } = useContext(LoginContext);
  const [name, setName] = useState(user.name);
  const history = useHistory();

  useEffect(() => {
    const userData = getUserData();
    if (!userData) history.push('/login');
  }, [history]);

  const isNameChanged = (actualName) => user.name !== actualName;

  const handleUpdateName = async () => API.updateUserName(name, user.email);

  return (
    <div>
      <Input id="profile-name-input" name="Nome" field={ name } setField={ setName } />
      <Input
        id="profile-email-input"
        name="Email"
        field={ user.email }
        readOnly
      />
      <SubmitButton
        name="Salvar"
        onClick={ handleUpdateName }
        disabled={ !isNameChanged(name) }
        id="profile-save-btn"
      />
    </div>
  );
}

export default Profile;
