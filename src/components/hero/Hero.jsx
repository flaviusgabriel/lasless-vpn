import "./style/hero-style.scss";
import ilustration from "./img/Illustration.png";

const Hero = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-description">
          <p>
            Want anything to be easy with
            <span class="bolded"> LaslesVPN.</span>
          </p>
          <div className="small-description">
            <p>
              Provide a network for all your needs with ease and fun using
              <span class="bolded"> LaslesVPN</span> discover interesting
              features from us.
            </p>
          </div>
          <button>Get Started</button>
        </div>
        <div className="hero-img">
          <img src={ilustration} alt="Hero img" />
        </div>
      </div>
      <div className="user-locations-servers-container">
        <div className="u-l-s-details">
          <div className="users">
            <div className="users-icon">
              <ion-icon name="person-outline"></ion-icon>
            </div>
            <div className="users-details ">
              <p className="number">90+</p>
              <p className="title">Users</p>
            </div>
          </div>
          <div className="locations">
            <div className="locations-icon">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="locations-details">
              <p className="number"> 30+</p>
              <p className="title">Locations</p>
            </div>
          </div>
          <div className="servers">
            <div className="servers-icon">
              <ion-icon name="server-outline"></ion-icon>
            </div>
            <div className="servers-details">
              <p className="number">50+</p>
              <p className="title">Servers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
