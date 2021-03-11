import React from 'react';

function SubmitButton({ name, disabled, dataTestId }) {
  return (
    <div>
      <button type='button' disabled={ disabled } data-testid={ dataTestId }>
        { name }
      </button>
    </div>
  )
}

export default SubmitButton;
