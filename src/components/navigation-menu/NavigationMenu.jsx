import logo from "../../assets/img/Logo.png";
import "./navigationMenu.scss";

import Button from "../common/Button/Button";

const NavigationMenu = () => {
  return (
    <div className="navigation-menu">
      {/* Navigation */}
      <nav class="navbar navbar-expand-lg  d-flex">
        <div class="container">
          <img src={logo} alt="Logo navigation..." />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link mt-0" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mt-0" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mt-0" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mt-0" href="#">
                  Testimonials
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mt-0" href="#">
                  Help
                </a>
              </li>
            </ul>
            <div class="d-flex navbar-buttons">
              <Button styleClass="btn-sign-in " value="Sign In" />
              <Button styleClass="btn-sign-up" value="Sign Up" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationMenu;
