import PlanCard from "../../components/PlanCard/PlanCard";

const TestPage = () => {
  const plans = [
    { title: 12, name: ["shopping", "sdasda", "GGGG"] },
    { title: 13, name: "holiday" },
    { title: 14, name: "car service" },
  ];
  return (
    <div>
      <h1>titlu</h1>
      <div className="cards-container">
        {plans.map((plan) => (
          <PlanCard title={plan.title} name={plan.name} />
        ))}
      </div>
    </div>
  );
};

export default TestPage;
