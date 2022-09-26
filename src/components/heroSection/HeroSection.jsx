import heroimage from "./assets/img/Illustration.png";

const HeroSection = () => {
  return (
    <div>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src={heroimage} alt="HeroImg..." />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3 hero-title">
              Want anything to be easy with LaslesVPN.
            </h1>
            <p class="lead">
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Primary
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="col d-flex align-items-start">
          <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            <svg class="bi" width="1em" height="1em">
              {/* <use xlink:href="#toggles2"></use> */}
            </svg>
          </div>
          <div>
            <h2>Featured title</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" class="btn btn-primary">
              Primary button
            </a>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            <svg class="bi" width="1em" height="1em">
              {/* <use xlink:href="#cpu-fill"></use> */}
            </svg>
          </div>
          <div>
            <h2>Featured title</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" class="btn btn-primary">
              Primary button
            </a>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            <svg class="bi" width="1em" height="1em">
              {/* <use xlink:href="#tools"></use> */}
            </svg>
          </div>
          <div>
            <h2>Featured title</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" class="btn btn-primary">
              Primary button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
