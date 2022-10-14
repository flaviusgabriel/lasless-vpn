import * as Ionicons from "react-icons/io5";
import PropTypes from "prop-types";
import "./iconComponent.scss";

const IconComponent = ({ type }) => {
  return (
    <div>
      {(() => {
        switch (type) {
          case "person":
            return <Ionicons.IoPerson className="red-icon" />;
          case "location":
            return <Ionicons.IoLocation className="red-icon" />;
          case "servers":
            return <Ionicons.IoServerSharp className="red-icon" />;
          case "checkMark":
            return <Ionicons.IoCheckmarkCircleSharp className="check-mark" />;
          case "thickMark":
            return <Ionicons.IoCheckmarkSharp className="check-mark" />;
          case "facebook":
            return <Ionicons.IoLogoFacebook className="red-icon" />;
          case "twitter":
            return <Ionicons.IoLogoTwitter className="red-icon" />;
          case "instagram":
            return <Ionicons.IoLogoInstagram className="red-icon" />;
          default:
            return null;
        }
      })()}
    </div>
  );
};

IconComponent.propTypes = {
  type: PropTypes.string,
};

IconComponent.defaultProps = {
  type: "person",
};

export default IconComponent;
