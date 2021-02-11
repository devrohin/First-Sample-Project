import { Link } from "react-router-dom";
import { ORG_LOGO, ORG_NAME } from "../lib/constants";
import "./Header.css";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export default function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <img src={ORG_LOGO} width="30px" alt="" />
        <h2> {ORG_NAME} </h2>
        <div className="login-container">
          <Link to="/login">
            <button>Login</button></Link>
          <button>Sign Up</button>
        </div>
      </div>
      <nav className="headerNav">
        <div className="nav-item-container">
          <Link to="/admin">
            <p className="navitem">Admissions</p>
            <div className="dropdown-custom">
              <Link to="/dept"> LINK </Link>
              <Link to="/dept"> LINK </Link>
              <Link to="/dept"> LINK </Link>
              <Link to="/dept"> LINK </Link>
            </div>
          </Link>
        </div>
        <div className="nav-item-container">
          <Link to="/dept">
            <p className="navitem">Dept</p>
            <div className="dropdown-custom">
              <Link to="/dept"> LINK </Link>
              <Link to="/dept"> LINK </Link>
              <Link to="/dept"> LINK </Link>
              <Link to="/dept"> LINK </Link>
            </div>
          </Link>
        </div>
        <div className="nav-item-container">
          <Link to="/about">
            <p className="navitem">About</p>
            <div className="dropdown-custom">
              <Link to="/dept"> LINK </Link>
              <Link to="/dept"> LINK </Link>
              <Link to="/dept"> LINK </Link>
              <Link to="/dept"> LINK </Link>
            </div>
          </Link>
        </div>
        <div className="nav-item-container">
          <Link to="/facilities">
            <p className="navitem">Facilities</p>
            <div className="dropdown-custom">
              <Link to="/dept"> LINK </Link>
              <Link to="/dept"> LINK </Link>
              <Link to="/dept"> LINK </Link>
              <Link to="/dept"> LINK </Link>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}
