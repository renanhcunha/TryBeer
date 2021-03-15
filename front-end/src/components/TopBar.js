import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SideMenu from './SideMenu';
import './TopBar.css';

const TopBar = ({ text }) => {
  const [visibleSide, setVisibleSide] = useState(false);
  return (
    <div className="topBar">
      <button
        data-testid="top-hamburguer"
        onClick={ () => setVisibleSide(!visibleSide) }
        type="button"
      >
        <img src="teste.png" alt="hamburguer" />
      </button>
      <h1 data-testid="top-title">
        { text }
      </h1>
      { visibleSide && <SideMenu /> }
    </div>
  );
};

TopBar.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TopBar;
