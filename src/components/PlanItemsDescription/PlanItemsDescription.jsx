const PlanItemsDescription = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.description}
    </li>
  );
};

export default PlanItemsDescription;
