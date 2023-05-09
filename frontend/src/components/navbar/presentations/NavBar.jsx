import React from "react";
import PropTypes from 'prop-types';
import "./NavBar.scss";
import AgeLogo from "../../../assets/images/landing/age-viewer.jpg";

const NavBar = ({ setOpen, openEditor, setOpenEditor }) => (
  <nav className="header-nav">
    <div className="header-nav--border">
      <div className="navbar-logo">
        <img src={AgeLogo} alt="logo" className="navbar-logo--img" />
        <p className="navbar-logo--text">AGEViewer</p>
      </div>
      <div className="nav-btns">
        <div className="nav-btns--btn" onClick={() => setOpen(true)}>
          Generate Query
        </div>
        <div
          className="nav-btns--btn"
          onClick={() => setOpenEditor(!openEditor)}
        >
          {openEditor ? "Close Query" : "Create Query"}
        </div>
      </div>
    </div>
  </nav>
);

NavBar.propTypes = {
  setOpen: PropTypes.bool.isRequired,
  openEditor: PropTypes.bool.isRequired,
  setOpenEditor: PropTypes.func.isRequired,
};
export default NavBar;
