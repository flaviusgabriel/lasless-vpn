import "../../style/card-component-style.scss";
import profileImg from "./assets/img/Profile.jpg";

const CardComponent = (props) => {
  return (
    <div>
      {/* <div class="col-md-6"> */}
      <div class="card h-100 p-5  rounded-3 border border-danger">
        {/* <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <div class="col mb-3">
                <h6>First Name</h6>
                <span>Last Name</span>
              </div>
            </div>
            <small class="text-muted">
              4.5 <ion-icon name="star-sharp"></ion-icon>
            </small>
          </div> */}
        <a
          href="#"
          class="list-group-item list-group-item-action d-flex  gap-3 py-3 border-0 "
          aria-current="true"
        >
          <img
            src={profileImg}
            alt="twbs"
            width="42"
            height="42"
            class="rounded-circle flex-shrink-0"
          ></img>
          <div class="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 class="mb-0">{props.name}</h6>
              <span class="mb-0 opacity-75">{props.location}</span>
            </div>
            <small class="text-muted">
              {props.rate}
              <ion-icon name="star-sharp"></ion-icon>
            </small>
          </div>
        </a>
        <p class="about text-justify">{props.comment}</p>
      </div>
    </div>
    // </div>
  );
};

export default CardComponent;
