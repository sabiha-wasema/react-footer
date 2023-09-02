import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-color ">
        <div class="container ">
          <a class="navbar-brand text-white" href="#">
            E-Coaching
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto w-50">
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#footer">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
