import React from "react";

const Welcome = () => {
  return (
    <div className="py-4">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">¡BIENVENIDOS!</h1>
          <p className="col-md-8 fs-4">
          Programación Full Stack. Aprende a programar desde cero. Aprende todo lo necesario, 
          recibe soporte de por vida y consigue un trabajo después de 16 semanas de estudio.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            ¡COMENZAR YA!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;