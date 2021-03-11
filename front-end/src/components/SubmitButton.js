import React from 'react';
import PropTypes from 'prop-types';

function SubmitButton({ name, disabled, dataTestId }) {
  return (
    <div>
      <button type="button" disabled={ disabled } data-testid={ dataTestId }>
        { name }
      </button>
    </div>
  );
}

SubmitButton.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default SubmitButton;
