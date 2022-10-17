import "./brands.scss";

const Brands = () => {
  const names = [
    { name: "Netflix" },
    { name: "Reddit" },
    { name: "Amazon" },
    { name: "Discord" },
    { name: "Spotify" },
  ];

  return (
    <div>
      <div class="container d-flex align-items-center justify-content-center">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 py-5 align-items-center justify-content-center">
          {names.map((item, index) => {
            return (
              <div
                class="col d-flex align-items-center justify-content-center"
                key={index}
              >
                <div className="image-wrapper">
                  <img src={require(`../../assets/img/${item.name}.png`)} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Brands;
