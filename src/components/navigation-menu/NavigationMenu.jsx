import logo from "./assets/img/Logo.png";
import "../../style/navigation-menu-style.scss";

const NavigationMenu = () => {
  return (
    <div>
      {/* <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav> */}

      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom navigation-menu">
        <a
          href="/"
          class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img src={logo} alt="Logo..." />
        </a>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" class="nav-link px-2  navlinks">
              About
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-2 navlinks">
              Features
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-2 navlinks">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-2 navlinks">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-2 navlinks">
              Help
            </a>
          </li>
        </ul>

        <div class="col-md-3 text-end">
          {/* <button type="button" class="btn btn-outline-primary me-2">
            Sign In
          </button> */}
          <button type="button" class="btn btn-link me-2 sign-in">
            Sign In
          </button>

          <button type="button" class="btn btn-outline-danger sign-up">
            Sign Up
          </button>
        </div>
      </header>
    </div>
  );
};

export default NavigationMenu;
