import "./style/header-nav-style.scss";
import logo from "./img/Logo.png";

const HeaderNav = () => {
  return (
    <div>
      <header>
        <a class="logo">
          <img src={logo} alt="Logo" />
        </a>
        <nav>
          <ul class="nav__links">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>Help</a>
            </li>
          </ul>
        </nav>
        <div className="sign-in-up">
          <a class="sign-in">Sign In</a>
          <a class="sign-up">Sign Up</a>
        </div>
      </header>
    </div>
  );
};

export default HeaderNav;
