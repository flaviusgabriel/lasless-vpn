import logo from "../../assets/img/Logo.png";
import IconComponent from "../common/IconComponent/IconComponent";
import "./footer.scss";

const Footer = () => {
  const brandsLogo = [
    { name: "facebook" },
    { name: "twitter" },
    { name: "instagram" },
  ];

  return (
    <div class="footer">
      <div class="container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 footer-container">
          {/* <div class="footer-container"> */}
          <div class="col mb-3 ">
            <a
              href="/"
              class="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <img src={logo} alt="Logo..." />
            </a>
            <p class="text-muted">
              LaslesVPN is a private virtual network that has unique features
              and has high security.
            </p>
            <ul class="list-unstyled d-flex ">
              {/* <li class="ms-3">
                <a class="link-dark" href="#">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li> */}
              {brandsLogo.map((item, index) => {
                return (
                  <div
                    class="col d-flex align-items-center justify-content-center "
                    key={index}
                  >
                    <div class="icon-square-social  d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                      <div>
                        <IconComponent type={item.name} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </ul>
            <p class="text-muted">© 2020LaslesVPN</p>
          </div>

          <div class="col mb-3"></div>

          <div class="col mb-3">
            <h5>Product</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Download
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Location
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Server
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Countries
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5>Engage</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  LaslesVPN ?
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  FAQ
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Tutorials
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  About Us
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Privacy Policy
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5>Earn Money</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Affiliate
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Become Partner
                </a>
              </li>
            </ul>
          </div>
          {/* </div> */}
        </footer>
      </div>
    </div>
  );
};

export default Footer;
