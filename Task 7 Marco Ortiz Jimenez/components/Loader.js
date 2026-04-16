import React from 'react';

function Loader() {
  return (
    <div className="my-4">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-2 text-muted">Generando imagen, por favor espera...</p>
    </div>
  );
}

export default Loader;