import React from "react";
import "../index.css";
import testimonial1 from "../assets/testimonials/testimonials-1.jpg";
// import testimonial2 from "../assets/testimonials/testimonials-2.jpg";
// import testimonial3 from "../assets/testimonials/testimonials-3.jpg";
// import testimonial4 from "../assets/testimonials/testimonials-4.jpg";
// import testimonial5 from "../assets/testimonials/testimonials-4.jpg";

const TestimonialSection = () => {
  const content = [
    {
      name: "Saul Goodman",
      status: "Ceo & Founder",
      id: "testimonial-1",
      desctiption:
        " Proin iaculis purus consequat sem cure digni ssim donecporttitora entum suscipit rhoncus. Accusantium quam,ultricies eget id, aliquam eget nibh et. Maecen aliquam,risus at semper.",

    },
    {
      name: "Sara Wilsson",
      status: "Designer",
      id: "testimonial-2",
      desctiption:
        " Proin iaculis purus consequat sem cure digni ssim donecporttitora entum suscipit rhoncus. Accusantium quam,ultricies eget id, aliquam eget nibh et. Maecen aliquam,risus at semper.",
      image: "../assets/testimonials/testimonials-2.jpg",
    },
    {
      name: "Jena Karlis",
      status: "Store Owner",
      id: "testimonial-3",
      desctiption:
        " Proin iaculis purus consequat sem cure digni ssim donecporttitora entum suscipit rhoncus. Accusantium quam,ultricies eget id, aliquam eget nibh et. Maecen aliquam,risus at semper.",
      image: "../assets/testimonials/testimonials-3.jpg",
    },
    {
      name: "Matt Brandon",
      status: "Freelancer",
      id: "testimonial-4",
      desctiption:
        " Proin iaculis purus consequat sem cure digni ssim donecporttitora entum suscipit rhoncus. Accusantium quam,ultricies eget id, aliquam eget nibh et. Maecen aliquam,risus at semper.",
      image: "../assets/testimonials/testimonials-4.jpg",
    },
  ];
  return (
    <>
      <section id="testimonials" className="testimonials section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Testimonials</h2>
          </div>

          <div
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="swiper-wrapper">
              {content.map((testimonial) => (
                <div className="swiper-slide" key={testimonial.id}>
                  <div className="testimonial-item">
                    <img
                      src={testimonial1}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>{testimonial.name}</h3>
                    <h4>{testimonial.status}</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      {testimonial.desctiption}
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              ))}


            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
