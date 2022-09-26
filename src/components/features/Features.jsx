import "../../style/features-style.scss";
import image from "./assets/img/Illustration.png";

const Features = () => {
  return (
    <div className="features-container">
      <div class="container d-flex justify-content-center">
        <div class="row">
          <div class="col-md-12 col-xs-12 col-lg-6">
            <img src={image} alt="Feature image" />
          </div>
          <div class="col-md-12 col-xs-12 col-lg-6 titi">
            <div></div>
            <h1>We Provide Many Features You Can Use</h1>
            <p>
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            {/* <div class="col">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
              <p>Powerfull online protection.</p>
            </div>
            <div class="col">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
              <p>Internet without borders.</p>
            </div>
            <div class="col">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
              <p>Supercharged VPN.</p>
            </div>
            <div class="col">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
              <p>No specific time limits.</p>
            </div> */}
            <div className="futures-list-container">
              <div className="futures-list">
                <div className="futures-list-icon">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                </div>
                <div className="futures-list-text">
                  Powerfull online protection.
                </div>
              </div>
              <div className="futures-list">
                <div className="futures-list-icon">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                </div>
                <div className="futures-list-text">
                  Internet without borders.
                </div>
              </div>
              <div className="futures-list">
                <div className="futures-list-icon">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                </div>
                <div className="futures-list-text">Supercharged VPN.</div>
              </div>
              <div className="futures-list">
                <div className="futures-list-icon">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                </div>
                <div className="futures-list-text">
                  No specific time limits.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
