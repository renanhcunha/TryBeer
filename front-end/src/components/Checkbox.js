import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({ dataTestId, name, field, setField, type = 'checkbox' }) {
  return (
    <form>
      <label htmlFor={ name }>
        {name}
        <input
          data-testid={ dataTestId }
          value={ field }
          id={ name }
          onChange={ () => setField(!field) }
          type={ type }
        />
      </label>
    </form>
  );
}

Checkbox.defaultProps = { type: 'checkbox' };

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  setField: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Checkbox;
