import { Outlet, NavLink } from "react-router-dom";
import "./layout.css";

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            START FRAMEWORK
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/portfolio">
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="main-wrapper">
        <Outlet />
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <h3>LOCATION</h3>
              <p className="mb-0">2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
              <h3>AROUND THE WEB</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fas fa-globe"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <h3>ABOUT FREELANCER</h3>
              <p className="mb-0">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="mb-0">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </div>
  );
}
