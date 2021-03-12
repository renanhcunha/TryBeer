import React from 'react';
import PropTypes from 'prop-types';

function Input({ id, name, field, setField, type = 'text' }) {
  return (
    <form>
      <label htmlFor={ name }>
        {name}
        <input
          data-testid={ id }
          value={ field }
          id={ name }
          onChange={ ({ target: { value } }) => setField(value) }
          type={ type }
        />
      </label>
    </form>
  );
}

Input.defaultProps = { type: 'text' };

Input.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  setField: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Input;
