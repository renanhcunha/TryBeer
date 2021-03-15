import React, { useContext, useState } from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import LoginContext from '../context/LoginContext';
import API from '../services/API';

function Profile() {
  const { user } = useContext(LoginContext);
  const [name, setName] = useState(user.name);

  const isNameChanged = (actualName) => user.name !== actualName;

  const handleUpdateName = () => {
    const res = API.updateUserName(name);
  };

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
