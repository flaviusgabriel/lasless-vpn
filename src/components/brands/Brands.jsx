import netflix from "../../assets/img/Netflix.png";
import reddit from "../../assets/img/Reddit.png";
import amazon from "../../assets/img/Amazon.png";
import discord from "../../assets/img/Discord.png";
import spotify from "../../assets/img/Spotify.png";

import "./brands.scss";

const Brands = () => {
  return (
    <div>
      <div class="container d-flex align-items-center justify-content-center">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 py-5 align-items-center justify-content-center">
          <div class="col d-flex align-items-center justify-content-center">
            <div>
              <img src={netflix} alt="Netflix..." />
            </div>
          </div>
          <div class="col d-flex align-items-center justify-content-center">
            <div className="image-wrapper">
              <img src={reddit} alt="Reddit..." />
            </div>
          </div>
          <div class="col d-flex align-items-center justify-content-center">
            <div className="image-wrapper">
              <img src={amazon} alt="Amazon..." />
            </div>
          </div>
          <div class="col d-flex align-items-center justify-content-center">
            <div className="image-wrapper">
              <img src={discord} alt="Discord..." />
            </div>
          </div>
          <div class="col d-flex align-items-center justify-content-center">
            <div className="image-wrapper">
              <img src={spotify} alt="Spotify..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
