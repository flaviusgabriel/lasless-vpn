import heroimage from "../../assets/img/Illustration.png";
import "./heroSection.scss";

import Button from "../common/Button/Button";
import { IconData } from "../IconData/IconData";
import IconComponent from "../common/IconComponent/IconComponent";

const HeroSection = () => {
  const features = [
    { icon: "person", number: "90+", description: "Users" },
    { icon: "location", number: "30+", description: "Locations" },
    { icon: "servers", number: "50+", description: "Servers" },
  ];
  return (
    <div>
      <div className="container col-xxl-10 px-4 py-5">
        <div class="container">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5 hero">
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
                  <strong> LaslesVPN </strong>
                </p>
                <p> discover interesting features from us.</p>
              </div>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <div class="button-get-started sp-b">
                  <Button styleClass="button-get-started" value="Get Started" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container py-5">
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3 rounded-3 user-location-servers ">
          {features.map((item, index) => {
            return (
              <div
                class="col d-flex align-items-center justify-content-center divider"
                key={index}
              >
                <div class="icon-square  d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                  <IconComponent type={item.icon} />
                </div>

                <div>
                  <h3 className="fe-title">{item.number}</h3>
                  <p className="fe-subtitle">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
