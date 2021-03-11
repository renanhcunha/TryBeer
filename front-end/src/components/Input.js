import React from 'react';
import PropTypes from 'prop-types';

function Input({ dataTestId, name, field, setField, type = 'text' }) {
  return (
    <form>
      <label htmlFor={ name }>
        {name}
        <input
          data-testid={ dataTestId }
          value={ field }
          id={ name }
          onChange={ ({ target: { value } }) => setField(value) }
          type={ type }
        />
      </label>
    </form>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.func.isRequired,
  setField: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default Input;
