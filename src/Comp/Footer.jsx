import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="container ">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">
              <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
            </a>
            <span className="mb-3 mb-md-0 text-white">© 2024 Mitali Patil</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-2"><a target='_blank' className="text-white" xlinkHref="https://github.com/mitupatil18"><svg className="bi" width="30" height="34"><FaGithub /></svg></a></li>
            <li className="ms-2"><a target='_blank' className="text-white" xlinkHref="https://www.instagram.com/mitaliiiiipatil/"><svg className="bi" width="30" height="34"><FaInstagram /></svg></a></li>
            <li className="ms-2"><a target='_blank' className="text-white" xlinkHref="https://www.linkedin.com/in/mitali-patil-3ab106231/"><svg className="bi" width="30" height="34"><FaLinkedin /></svg></a></li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
