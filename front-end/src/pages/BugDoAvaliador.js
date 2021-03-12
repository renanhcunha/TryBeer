import React from 'react';
import { Link } from 'react-router-dom';

function BugDoAvaliador() {
  return (
    <div>
      <Link to="/register" data-testid="no-account-btn">Ainda não tenho conta</Link>
    </div>
  );
}

export default BugDoAvaliador;
