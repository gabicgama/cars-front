import "bootstrap/js/src/collapse.js";
import "./styles.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>Carros Top</h4>
        </Link>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carros-navbar"
          aria-controls="carros-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon custom-toggler"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="carros-navbar"
        >
          <ul className="navbar-nav main-menu">
            <li>
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active">
                Catálogo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
