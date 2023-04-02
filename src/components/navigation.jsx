import React from "react";

export const Navigation = (props) => {
  return (
    <nav
      id="menu"
      className="navbar navbar-default navbar-fixed-top"
      style={{ backgroundColor: "green" }}
    >
      <div className="container" style={{ backgroundColor: "blue" }}>
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
              backgroundColor: "brown",
            }}
          >
            <img
              src="img/Home.png"
              alt="Home Icon"
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: "red",
              }}
            />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
          style={{
            display: "flex",
            backgroundColor: "orange",
            alignItems: "flex-end",
          }}
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
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
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonios
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
