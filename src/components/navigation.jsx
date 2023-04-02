import React from "react";

export const Navigation = (props) => {
  return (
    <nav
      id="menu"
      className="navbar navbar-default navbar-fixed-top"
      style={{}}
    >
      <div className="container" style={{}}>
        <div
          className="navbar-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            style={{
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <img
              src="img/Home.png"
              alt="Home Icon"
              style={{
                width: "100%",
                height: "60px",
              }}
            />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
          style={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                Acerca de
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Servicios
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Equipo
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
