import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.styles.css";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar-container container-fluid">
        <Link to="/">Dashboard</Link>
        <Link to="auth">Sign In</Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
