import "./plan-style.scss";
import PlanCard from "../PlanCard/PlanCard";

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
      unitOfMeasure: null,
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
      secondtitle: "$9",
      unitOfMeasure: "/ mo",
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
      secondtitle: "$12",
      unitOfMeasure: "/ mo",
    },
  ];

  return (
    <div className="plan-container">
      <div class="container">
        <div class="d-flex justify-content-center">
          <div class="px-4 py-2 my-5 text-center map-title">
            <div class="plan-title">
              <h1>Choose Your Plan</h1>
            </div>
            <div class="plan-subtitle">
              <p>
                Let's choose the package that is best for you and explore it
                happily and cheerfully.
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row ">
            {plans.map((plan, id) => (
              <div class="col-lg-4 mb-4 " key={id}>
                <PlanCard
                  key={id}
                  title={plan.title}
                  description={plan.description}
                  secondtitle={plan.secondtitle}
                  unitOfMeasure={plan.unitOfMeasure}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
