import planimage from "./assets/img/Free.png";

const PlanCard = (props) => {
  return (
    <div>
      {/* <div class="row"> */}
      {/* <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-4"> */}
      <div class="card">
        <img
          src={planimage}
          alt="plan-img"
          class="mx-auto d-block plan-image"
        />

        <div class="card-body text-center">
          <h5 class="card-title">{props.title}</h5>

          <div className="plan-include">
            <div className="subscription-details">
              <div className="subscription-icon">
                <ion-icon name="checkmark-outline"></ion-icon>
              </div>
              <div className="subscription-text">
                <p class="card-text text-left">{props.description}</p>
              </div>
            </div>

            {/* <div className="subscription-details">
                  <div className="subscription-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </div>
                  <div className="subscription-text">
                    <p class="card-text text-left">Encrypted Connection</p>
                  </div>
                </div>

                <div className="subscription-details">
                  <div className="subscription-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </div>
                  <div className="subscription-text">
                    <p class="card-text text-left">No Traffic Logs</p>
                  </div>
                </div>

                <div className="subscription-details">
                  <div className="subscription-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </div>
                  <div className="subscription-text">
                    <p class="card-text text-left">Works on All Devices</p>
                  </div>
                </div> */}
          </div>

          <div className="subscription-name-button">
            <div className="plan-title-name">{props.secondtitle}</div>
            <a href="#" class="btn subscription-buttton">
              Select
            </a>
          </div>
        </div>
      </div>
    </div>
    //     </div>
    //   </div>
    // </div>
    // </div>
  );
};

export default PlanCard;
