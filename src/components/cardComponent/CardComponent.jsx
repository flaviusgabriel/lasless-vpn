import "../../style/card-component-style.scss";
import profileImg from "../../assets/img/Profile.jpg";

const CardComponent = (props) => {
  return (
    <div>
      <div class="card h-100 p-5  rounded-3 border testimonial-card card-body flex-fill">
        <a class=" d-flex  gap-3 py-3 border-0 testimonial-details">
          <img
            src={props.linkImg}
            alt="twbs"
            width="42"
            height="42"
            class="rounded-circle flex-shrink-0"
          ></img>
          <div class="d-flex gap-2 w-100 justify-content-between ">
            <div>
              <h6 class="mb-0 testimonial-name">{props.name}</h6>
              <span class="mb-0 opacity-75 testimonial-location">
                {props.location}
              </span>
            </div>
            <div className=""></div>
            <small class=" d-flex justify-content-center align-items-center rate testimonial-rate">
              {props.rate}
              <ion-icon name="star-sharp"></ion-icon>
            </small>
          </div>
        </a>
        <p class="about text-justify testimonial-comment">{props.comment}</p>
      </div>
    </div>
  );
};

export default CardComponent;
