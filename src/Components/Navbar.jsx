import React from "react";
import Logo from "../Assets/Logo.svg";
import "../globalStyle.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  
  // const [showMenu, setShowMenu] = useState(false);
  // const handleMenu = () => setShowMenu((prevState) => !prevState)
  return (
    <div>
      <section>
        <nav className="navbar navbar-expand-lg navbar-dark bg-muted shadown-0">
          <div className="container">
            <a className="navbar-brand me-2" href="https://mdbgo.com/">
              <img src={Logo} height="16" alt="MDB Logo" loading="lazy" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarButtonsExample"
              aria-controls="navbarButtonsExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarButtonsExample">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <Link to='/about' className="nav-link">
                   About
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </section>

     
    </div>
  );
};

export default Navbar;
