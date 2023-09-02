import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-5">
        <div className="row g-5 footer-description">
          {" "}{/* Added "g-4" class for column gap */}
          <div className="col-lg-4 d-flex flex-column">
            <div className="d-flex align-items-center">
              <i class="fa-solid fa-paper-plane mb-1 text-success" />
              <h5 className="ms-3">E-Coaching</h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              quidem explicabo voluptate neque laboriosam, perferendis
              consectetur modi repudiandae doloribus harum?
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
          <div className="col-lg-2">
            <h5 className="mb-4">Payment Methods</h5>
            <div className="row">
              <div className="col-md-4">
                <ul className="list-unstyled custom-list">
                  <li>
                    <a href="#">
                      <img src="image1.jpg" alt="Image 1" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="image2.jpg" alt="Image 2" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="image2.jpg" alt="Image 2" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-unstyled custom-list">
                  <li>
                    <a href="#">
                      <img src="image3.jpg" alt="Image 3" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="image4.jpg" alt="Image 4" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 mb-3">
            <h5>Quick Link</h5>
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
          <div className="col-lg-2 mb-3">
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
          <div className="col-lg-2 mb-3">
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
        <div className="row">
          <div className="col-md-6 custom-col">
            <div class="copyright">
              Copyright &copy; {new Date().getFullYear()} Educational Center
            </div>
          </div>
          <div className="col-md-2 custom-col">One of three columns</div>
          <div className="col-md-2 custom-col">One of three columns</div>
          <div className="col-md-2 custom-col">One of three columns</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
