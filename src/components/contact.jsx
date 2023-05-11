import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contactanos</h2>
                <p>Puede contactarnos a traves de los siguientes medios</p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <FontAwesomeIcon className="fa" icon={faLocationDot} />{" "}
                    Dirección
                  </span>
                  {props.data ? props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <FontAwesomeIcon className="fa" icon={faPhone} />{" "}
                    Telefono-Celular
                  </span>{" "}
                  {props.data ? props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <FontAwesomeIcon className="fa" icon={faEnvelope} /> Correo
                    electronico
                  </span>{" "}
                  {props.data ? props.data.email : "loading"}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <FontAwesomeIcon
                        className="fa facebook"
                        icon={faFacebook}
                      />
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <FontAwesomeIcon
                        className="fa instagram"
                        icon={faInstagram}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
