import { IconData } from "../IconData/IconData";

const IconComponent = () => {
  return (
    <div>
      {IconData.map((item, index) => {
        return (
          <div class="col d-flex align-items-center justify-content-center divider">
            <div class="icon-square  d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <div key={index}>
                <div>{item.icon}</div>
              </div>
            </div>

            <div>
              <h3 className="fe-title">{item.number}</h3>
              <p className="fe-subtitle">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IconComponent;
