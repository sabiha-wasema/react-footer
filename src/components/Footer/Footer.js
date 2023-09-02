import React from "react";
import "./Footer.css";
import visaImage from "../../image/visa.png";
import bkashImage from "../../image/bkash.png";
import masterImage from "../../image/master.png";
import dbblImage from "../../image/dbbl.png";
import bankImage from "../../image/islami.png";

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-5">
        <div className="row g-5 footer-description">
          {" "}{/* Added "g-4" class for column gap */}
          <div className="col-md-4 d-flex flex-column">
            <div className="d-flex align-items-center">
              <i class="fa-solid fa-paper-plane mb-2 custom-icon" />
              <h6 className="ms-2 custom-heading">E - Coaching</h6>
            </div>
            <p>
              Coaching is a means for developing a partnership between the
              manager and employee that creates a shared understanding about
              what needs to be achieved and how it is to be achieved.
            </p>
            <div className="input-group ">
              <input
                type="text"
                className=" form-control bg-dark py-2 text-white"
                placeholder="Enter the Email"
                style={{ borderColor: "#55c946" }}
              />
              <button
                className="btn btn-outline-primary px-3"
                type="button"
                style={{
                  backgroundColor: "#55c946",
                  borderColor: "#55c946",
                  color: "white"
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="col-md-2">
            <h5 className="mb-2">Payment Methods</h5>
            <div className="row">
              <div className="col-md-4">
                <ul className="list-unstyled custom-list">
                  <li>
                    <a href="#">
                      <img src={visaImage} alt="Image 1" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={bkashImage} alt="Image 2" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={masterImage} alt="Image 2" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-unstyled custom-list">
                  <li>
                    <a href="#">
                      <img src={dbblImage} alt="Image 3" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={bankImage} alt="Image 4" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-3">
            <h5 className="ms-2">Quick Link</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="dark-link active">
                  {" "}{/* Add the "active" class here */}
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="dark-link">
                  Our story
                </a>
              </li>
              <li>
                <a href="#" className="dark-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="dark-link">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="dark-link">
                  Popular Courses
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mb-3">
            <h5 className="ms-2">Services</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="dark-link">
                  Academic Courses
                </a>
              </li>
              <li>
                <a href="#" className="dark-link">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="dark-link">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="dark-link">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="dark-link">
                  Spoken English
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mb-3">
            <h5 className="ms-2">Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="dark-link">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="dark-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="dark-link">
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="#" className="dark-link">
                  Submit a Request
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="custom-container">
        <div className="row py-1">
          <div className="col-md-5 custom-col">
            <div class="copyright">
              Copyright &copy; {new Date().getFullYear()} Educational Center
            </div>
          </div>
          <div className="col-md-3 custom-col">
            <div class="contact-info">
              <i class="mb-3 fa-solid fa-envelope" />
              <p>info@educationalcenter.com</p> {/* Email address */}
            </div>
          </div>
          <div className="col-md-2 custom-col">
            <div class="contact-info">
              <i class="mb-3 fa-solid fa-phone-volume" /> {/* phone icon*/}
              <p>+1-774-267-8439</p>
            </div>
          </div>
          <div className="col-md-2 custom-col">
            <div class="social-icons">
              <a href="#">
                <div class="icon-container">
                  <i class="fa-brands fa-facebook-f" />
                </div>
              </a>
              <a href="#">
                <div class="icon-container">
                  <i class="fab fa-twitter" />
                </div>
              </a>
              <a href="#">
                <div class="icon-container">
                  <i class="fab fa-instagram" />
                </div>
              </a>
              <a href="#">
                <div class="icon-container">
                  <i class="fa-brands fa-linkedin-in" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
