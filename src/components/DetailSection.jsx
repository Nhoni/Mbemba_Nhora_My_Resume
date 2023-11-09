import React from "react";
import "../index.css";
import portfolio1 from "../assets/portfolio/portfolio-details-1.jpg";
import portfolio2 from "../assets/portfolio/portfolio-details-2.jpg";
import portfolio3 from "../assets/portfolio/portfolio-details-3.jpg";
import { Link } from "react-router-dom";


const DetailSection = () => {
 
  return (
    <>
     <main id="main">


<section id="portfolio-details" class="portfolio-details">
  <div class="container">

    <div class="row gy-4">

      <div class="col-lg-8">
        <div class="portfolio-details-slider swiper">
          <div class="swiper-wrapper align-items-center">

            <div class="swiper-slide">
              <img src={portfolio1} alt=""/>
            </div>

            <div class="swiper-slide">
              <img src={portfolio2} alt=""/>
            </div>

            <div class="swiper-slide">
              <img src={portfolio3} alt=""/>
            </div>

          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="portfolio-info">
          <h3>Project information</h3>
          <ul>
            <li><strong>Category</strong>: Web design</li>
            <li><strong>Client</strong>: ASU Company</li>
            <li><strong>Project date</strong>: 01 March, 2020</li>
            <li><strong>Project URL</strong>: <Link to="#">www.example.com</Link></li>
          </ul>
        </div>
        <div class="portfolio-description">
          <h2>This is an example of portfolio detail</h2>
          <p>
            Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

</main>

<div id="preloader"></div>
<Link to="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></Link>
    </>
   
  );
};

export default DetailSection;