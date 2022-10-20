import MapChart from "../MapChart/MapChart";
import "./mapSection.scss";

const MapSection = () => {
  return (
    <div>
      <div className="map-container-ss">
        <div class="container">
          <div class="px-4 py-5 my-5 text-center map-title">
            <h1>Huge Global Network </h1>
            <h1>of Fast VPN</h1>

            {/* <div class="col-lg-6 mx-auto"> */}
            <div clas="map-subtitle">
              <p>
                See <strong> LaslesVPN </strong>everywhere to make it easier for
                you when you move
              </p>
              <p>locations.</p>
            </div>
            {/* <div class="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
        </div> */}
            <div class="container">
              <MapChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
