import "../../style/comments-carousel.scss";
import CardComponent from "../cardComponent/CardComponent";

const CommentsCarousel = () => {
  const testimonials = [
    {
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      rate: "4.5",
      comment:
        "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    },

    {
      name: "Yessica Christy",
      location: "Shanxi, China",
      rate: "4.5",
      comment:
        "“I like it because I like to travel far and still can connect with high speed.”.",
    },
    {
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      rate: "4.5",
      comment:
        "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
    },
  ];
  return (
    <div class="comments">
      <div class="container">
        <div class="px-4 text-center">
          <div class="comments-title">
            <h1>Trusted by Thousands of Happy Customer</h1>
          </div>
          <div class="col-lg-6 mx-auto">
            <div class="comments-subtitle">
              <p>
                These are the stories of our customers who have joined us with
                great pleasure when using this crazy feature.
              </p>
            </div>
            {/* <div class="d-grid gap-2 d-sm-flex justify-content-sm-center"></div> */}

            {/* <CardComponent /> */}
          </div>
        </div>
        <div class="album py-5  ">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
              {testimonials.map((comment) => (
                //   <div class="col-lg-6 mb-6 ">
                <CardComponent
                  name={comment.name}
                  location={comment.location}
                  rate={comment.rate}
                  comment={comment.comment}
                />
                //   </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div class="section1">
        <div class="content">Hello, world!</div>
        <div class="separator">
          <div class="bg-light p-5 rounded">
            <h1>Navbar example</h1>
            <p class="lead">
              This example is a quick exercise to illustrate how the top-aligned
              navbar works. As you scroll, this navbar remains in its original
              position and moves with the rest of the page.
            </p>
            <a
              class="btn btn-lg btn-primary"
              href="/docs/5.2/components/navbar/"
              role="button"
            >
              View navbar docs »
            </a>
          </div>
        </div>
      </div>
      <div class="section2">
        <div class="content">Hello, world!</div>
      </div> */}

        <div class="subscription">
          <div class="row align-items-center g-lg-5 py-5 shadow p-3 mb-5 bg-body rounded">
            <div class="col-lg-7 text-center text-lg-start">
              <div class="subs-title">
                <h1>Subscribe Now for Get Special Features!</h1>
              </div>
              <div class="subs-subtitle">
                <p class="col-lg-10 fs-4">
                  Let's subscribe with us and find the fun.
                </p>
              </div>
            </div>
            <div class="col-md-10 mx-auto col-lg-5 align-center">
              <div class="subs-but">
                <button type="button" class="btn float-right">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsCarousel;
