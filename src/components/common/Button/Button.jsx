import { propTypes } from "react-bootstrap/esm/Image";
import PropTypes from "prop-types";
import "./button.scss";

const Button = ({ styleClass, value }) => {
  return <button className={`btn ${styleClass}`}>{value}</button>;
};

// Button.propTypes = {
//   styleClass: PropTypes.string,
//   value: PropTypes.string.isRequired,
// };

// Button.defaultProps = {
//   styleClass: "btn-primary",
// };

export default Button;
