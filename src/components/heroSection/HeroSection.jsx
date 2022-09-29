import heroimage from "./assets/img/Illustration.png";
import "../../style/hero-style.scss";

const HeroSection = () => {
  return (
    <div>
      <div class="container col-xxl-10 px-4 py-5">
        <div class="container">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img class="hero-img" src={heroimage} alt="HeroImg..." />
            </div>
            <div class="hero-text col-lg-6">
              <div class="hero-title">
                <h1>
                  Want anything to be easy with <strong> LaslesVPN.</strong>
                </h1>
              </div>
              <div class="hero-subtitle">
                <p>
                  Provide a network for all your needs with ease and fun using
                  <strong> LaslesVPN </strong> discover interesting features
                  from us.
                </p>
              </div>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <div class="button-get-started">
                  <button type="button" class="btn">
                    Click Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class=" mb-4 bg-light rounded-2 shadow p-3 mb-5 bg-body rounded ">
          <div class="container-fluid py-5">
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3 center-block text-center justify-content-center align-items-center">
              <div class="col d-flex  justify-content-center align-items-center">
                <div class="icon-container rounded-circle  text-dark flex-shrink-0 me-3 w-10 p-3">
                  <ion-icon name="person-outline"></ion-icon>
                  {/* <svg
                    class="bi rounded-circle "
                    width="3em"
                    height="4em"
                  ></svg> */}
                </div>
                {/* <div style="text-align:center">
                  <span class="dot"></span>
                </div> */}
                <div>
                  <h2>90+</h2>
                  <p>Users</p>
                </div>
              </div>
              <div class="col d-flex align-items-start justify-content-center justify-content-center align-items-center">
                <div class="icon-container rounded-circle  text-dark flex-shrink-0 me-3 w-10 p-3">
                  <ion-icon name="location-outline"></ion-icon>
                  {/* <svg class="bi " width="3em" height="4em"></svg> */}
                </div>
                <div>
                  <h2>30+</h2>
                  <p>Locations</p>
                </div>
              </div>
              <div class="col d-flex align-items-start justify-content-center justify-content-center align-items-center">
                <div class="icon-container rounded-circle  text-dark flex-shrink-0 me-3 w-10 p-3">
                  <ion-icon name="server-outline"></ion-icon>
                </div>
                <div>
                  <h2>50+</h2>
                  <p>Servers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
