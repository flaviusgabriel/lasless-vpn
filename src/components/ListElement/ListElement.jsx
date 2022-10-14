import IconComponent from "../common/IconComponent/IconComponent";

const ListElement = (props) => {
  return (
    <div>
      <div className="subscription-details">
        <div className="subscription-icon">
          {/* <ion-icon name="checkmark-outline"></ion-icon> */}
          <IconComponent type="thickMark" />
        </div>
        <div> {props.description}</div>
      </div>
    </div>
  );
};

export default ListElement;
