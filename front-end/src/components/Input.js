import React from 'react';

function Input({ dataTestId, name, field, setField, type='text' }) {

  return (
    <form>
      <label>
        {name}
        <input
          data-testid={ dataTestId }
          value={ field }
          onChange={({ target: { value } }) => setField(value)}
          type={ type }
        />
      </label>
    </form>
  );
}

export default Input;

