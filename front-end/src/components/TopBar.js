import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SideMenu from './SideMenu';
import './TopBar.css';

const TopBar = ({ text, sideMenuOptions, isAdmin }) => {
  const [visibleSide, setVisibleSide] = useState(false);

  return (
    <div className="topBar">
      { !isAdmin ? (
        <div>
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
          { visibleSide && <SideMenu menuOptions={ sideMenuOptions } /> }
        </div>
      ) : (
        <div>
          <h1 data-testid="top-title">
            { text }
          </h1>
          <SideMenu menuOptions={ sideMenuOptions } />
        </div>
      )}
    </div>
  );
};

TopBar.defaultProps = { isAdmin: false };

TopBar.propTypes = {
  text: PropTypes.string.isRequired,
  sideMenuOptions: PropTypes.instanceOf(Object).isRequired,
  isAdmin: PropTypes.bool,
};

export default TopBar;
