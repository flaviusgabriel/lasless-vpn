import planimage from "../../assets/img/Free.png";
import "../../style/card-component-style.scss";
import ListElement from "../ListElement/ListElement";
import Button from "../common/Button/Button";

const PlanCard = (props) => {
  return (
    <div>
      <div class="card d-flex align card-plan mx-auto">
        <img
          src={planimage}
          alt="plan-img"
          class="mx-auto d-block plan-image"
        />

        <div class="card-body text-center">
          <h5 class="card-title">{props.title}</h5>

          <div className="plan-include">
            <div className="subscription-details d-flex justify-content-center">
              <div className="subscription-text">
                <p class="card-subtitle card-text text-left ">
                  {props.description.map((description, id) => {
                    return <ListElement key={id} description={description} />;
                  })}
                </p>
              </div>
            </div>
          </div>

          <div className="subscription-name-button ">
            <div class="plan-title-name">{props.secondtitle}</div>
            <Button styleClass="btn-sign-up" value="Select" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
