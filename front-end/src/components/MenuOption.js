import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logOff } from '../services/localStorage';

const MenuOption = ({ idTest, text, route }) => (
  <Link to={ route } onClick={ text === 'Sair' && logOff() }>
    <div data-testid={ idTest }>
      { text }
    </div>
  </Link>
);

MenuOption.propTypes = {
  idTest: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default MenuOption;
