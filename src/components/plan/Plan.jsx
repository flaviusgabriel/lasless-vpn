import "../../style/plan-style.scss";
import PlanCard from "../PlanCard/PlanCard";
import planimage from "./assets/img/Free.png";

function Item(props) {
  return <li>{props.message}</li>;
}

const Plan = () => {
  const todos = ["finish doc", "submit pr", "nag dan to review"];
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
          {/* <ul>
            {todos.map((message) => (
              <Item key={message} message={message} />
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Plan;
