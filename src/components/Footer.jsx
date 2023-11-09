import React from "react";
import "../index.css";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <h3>Brandon Johnson</h3>
          <p>
            Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
            eligendi fuga maxime saepe commodi placeat.
          </p>
          <div className="social-links">
            <Link to="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </Link>
            <Link to="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </Link>
            <Link to="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </Link>
            <Link to="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </Link>
            <Link to="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </Link>
          </div>
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>MyResume</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
          </div>
        </div>
      </footer>
      <div id="preloader"></div>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    </>
  );
};

export default Footer;
