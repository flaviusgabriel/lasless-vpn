import "../../style/plan-style.scss";
import PlanCard from "../PlanCard/PlanCard";
import planimage from "./assets/img/Free.png";

const Plan = () => {
  const plans = [
    {
      title: "Free Plan",
      description: [
        "Unlimited Bandwitch ",
        "Encrypted Connection ",
        "No Traffic Logs ",
        "Works on All Devices ",
      ],
      secondtitle: "Free",
    },
    {
      title: "Standard Plan",
      description: [
        "Unlimited Bandwitch ",
        "Encrypted Connection ",
        "No Traffic Logs ",
        "Works on All Devices ",
        "Connect Anyware ",
      ],
      secondtitle: "$9/mo",
    },
    {
      title: "Premium Plan",
      description: [
        "Unlimited Bandwitch ",
        "Encrypted Connection ",
        "No Traffic Logs ",
        "Works on All Devices ",
        "Connect Anyware ",
        "Get New Features ",
      ],
      secondtitle: "$12/mo",
    },
  ];

  return (
    <div className="plan-container">
      <div class="container">
        <div class="d-flex justify-content-center plan-title">
          <h1>Choose Your Plan</h1>
          <p>
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </div>
        <div class="container">
          <div class="row">
            {plans.map((plan) => (
              <div class="col-lg-4 mb-4">
                <PlanCard
                  title={plan.title}
                  description={plan.description}
                  secondtitle={plan.secondtitle}
                />
              </div>
            ))}
          </div>
        </div>

        {/* <div class="container">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur aut officia ducimus provident facilis nam doloremque
                porro autem corporis.
              </p>
            </div>
            <div class="col-md-3"></div>
          </div>
        </div> */}

        {/* <div class="col-sm-4">
            <div class="card">
              <img
                src={planimage}
                alt="plan-img"
                class="mx-auto d-block plan-image"
              />

              <div class="card-body text-center">
                <h5 class="card-title">Standard Plan</h5>

                <div className="plan-include">
                  <div className="subscription-details">
                    <div className="subscription-icon">
                      <ion-icon name="checkmark-outline"></ion-icon>
                    </div>
                    <div className="subscription-text">
                      <p class="card-text text-left">Unlimited Bandwitch</p>
                    </div>
                  </div>

                  <div className="subscription-details">
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
                  </div>
                  <div className="subscription-details">
                    <div className="subscription-icon">
                      <ion-icon name="checkmark-outline"></ion-icon>
                    </div>
                    <div className="subscription-text">
                      <p class="card-text text-left">Connect Anyware</p>
                    </div>
                  </div>
                </div>

                <div className="subscription-name-button">
                  <div className="plan-title-name">$9 / mo</div>
                  <a href="#" class="btn subscription-buttton">
                    Select
                  </a>
                </div>
              </div>
            </div>
          </div> */}

        {/* <div class="col-sm-4">
            <div class="card active">
              <img
                src={planimage}
                alt="plan-img"
                class="mx-auto d-block plan-image"
              />

              <div class="card-body text-center">
                <h5 class="card-title">Premium Plan</h5>

                <div className="plan-include">
                  <div className="subscription-details">
                    <div className="subscription-icon">
                      <ion-icon name="checkmark-outline"></ion-icon>
                    </div>
                    <div className="subscription-text">
                      <p class="card-text text-left">Unlimited Bandwitch</p>
                    </div>
                  </div>

                  <div className="subscription-details">
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
                  </div>

                  <div className="subscription-details">
                    <div className="subscription-icon">
                      <ion-icon name="checkmark-outline"></ion-icon>
                    </div>
                    <div className="subscription-text">
                      <p class="card-text text-left">Connect Anyware</p>
                    </div>
                  </div>

                  <div className="subscription-details">
                    <div className="subscription-icon">
                      <ion-icon name="checkmark-outline"></ion-icon>
                    </div>
                    <div className="subscription-text">
                      <p class="card-text text-left">Get New Features</p>
                    </div>
                  </div>
                </div>

                <div className="subscription-name-button">
                  <div className="plan-title-name">$12 / mo</div>
                  <a href="#" class="btn subscription-buttton">
                    Select
                  </a>
                </div>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default Plan;
