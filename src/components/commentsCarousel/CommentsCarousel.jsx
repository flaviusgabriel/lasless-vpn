import "./comments-carousel.scss";
import CardComponent from "../cardComponent/CardComponent";
import Button from "../common/Button/Button";

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
      <div class="container card-carousel">
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
          </div>
        </div>
        <div class="album py-5  ">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
              {testimonials.map((comments, id) => (
                <CardComponent
                  key={id}
                  name={comments.name}
                  location={comments.location}
                  rate={comments.rate}
                  comment={comments.comment}
                />
              ))}
            </div>
          </div>
        </div>

        <div class="subscription container ">
          <div class="subscription-section container ">
            <div class="row d-flex justify-content-center g-lg-3 py-5 shadow p-3 mb-5 bg-body rounded container ">
              <div class="container col-lg-5 text-center text-lg-start  ">
                <div class="subs-title">
                  <h1>Subscribe Now for Get Special Features!</h1>
                </div>
                <div class="subs-subtitle">
                  <p class="col-lg-10 ">
                    Let's subscribe with us and find the fun.
                  </p>
                </div>
              </div>
              <div class="col-md-10 mx-auto col-lg-5 d-flex flex-row-reverse align-items-center">
                <div class="subs-but">
                  <Button
                    styleClass="button-get-started"
                    value="Subscribe Now"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsCarousel;
