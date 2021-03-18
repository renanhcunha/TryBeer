import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Input from '../components/Input';
import MenuAndTopBar from '../components/MenuAndTopBar';
import SubmitButton from '../components/SubmitButton';
import UserContext from '../context/UserContext';
import API from '../services/API';
import { getUserToken } from '../services/localStorage';

function Profile({ location: { pathname } }) {
  const { user } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [isUpdated, setIsUpdated] = useState(false);
  const history = useHistory();

  const isAdmin = pathname.includes('admin');

  const checkToken = async () => {
    const token = getUserToken();
    const response = await API.validateUserToken(token);
    if (!response) history.push('/login');
  };

  useEffect(() => {
    checkToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isNameChanged = (actualName) => user.name !== actualName;

  const handleUpdateName = async () => {
    setIsUpdated(true);
    await API.updateUserName(name, user.email);
  };

  return (
    <div>
      <MenuAndTopBar pathname={ pathname } title="Meu perfil" />
      { isAdmin ? (
        <div>
          <h2 data-testid="profile-name">{ `Nome: ${name}` }</h2>
          <h2 data-testid="profile-email">{ `Email: ${user.email}` }</h2>
        </div>
      ) : (
        <div>
          <Input
            id="profile-name-input"
            name="Nome"
            field={ name }
            setField={ setName }
          />
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
          {isUpdated && <p>Atualização concluída com sucesso</p>}
        </div>
      )}
    </div>
  );
}

Profile.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Profile;
