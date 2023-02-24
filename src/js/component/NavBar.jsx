import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div class="container d-flex">
        <a className="navbar-brand p-2 flex-grow-1" href="#">
          {" "}
          Sandra & Nuria
          {/* <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" className="logo" /> */}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text white"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#">Inicio</a>
            <a className="nav-link" href="#">Nosotros</a>
            <a className="nav-link" href="#">Servicios</a>
            <a className="nav-link">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;