import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row g-4">
          {" "}{/* Added "g-4" class for column gap */}
          <div className="col-md-4 d-flex flex-column">
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
                style={{ borderColor: "#4ddd7f" }}
              />
              <button
                className="btn btn-outline-primary px-3"
                type="button"
                style={{
                  backgroundColor: "#4ddd7f",
                  borderColor: "#4ddd7f",
                  color: "white"
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="col-md-2">
            <h5>Payment Methods</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Link 4</a>
              </li>
              <li>
                <a href="#">Link 5</a>
              </li>
              <li>
                <a href="#">Link 6</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Quick Link</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Link 7</a>
              </li>
              <li>
                <a href="#">Link 8</a>
              </li>
              <li>
                <a href="#">Link 9</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Link 10</a>
              </li>
              <li>
                <a href="#">Link 11</a>
              </li>
              <li>
                <a href="#">Link 12</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Link 10</a>
              </li>
              <li>
                <a href="#">Link 11</a>
              </li>
              <li>
                <a href="#">Link 12</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
