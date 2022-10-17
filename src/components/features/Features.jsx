import "./features-style.scss";
import image from "../../assets/img/Illustration2.png";
import IconComponent from "../common/IconComponent/IconComponent";

const Features = () => {
  const features = [
    { name: "Powerfull online protection." },
    { name: "Internet without borders." },
    { name: "Supercharged VPN" },
    { name: "No specific time limits." },
  ];
  return (
    <div className="features-container">
      <div class="container d-flex justify-content-center">
        <div class="row">
          <div class="col-md-12 col-xs-12 col-lg-6 ">
            <img class="features-img" src={image} alt="Feature image" />
          </div>
          <div class="col-md-12 col-xs-12 col-lg-6 titi">
            <div class="features-title">
              <h1>We Provide Many Features You Can Use</h1>
            </div>
            <div class="features-subtitle">
              <p>
                You can explore the features that we provide with fun and have
                their own functions each feature.
              </p>
            </div>

            <div className="features-list-container">
              {features.map(function (d, id) {
                return (
                  <div key={id}>
                    <div className="features-list justify-content-start align-items-center ">
                      <div className="features-list-icon d-flex justify-content-center ">
                        <IconComponent type="checkMark" />
                      </div>
                      <div className="features-list-text">{d.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
