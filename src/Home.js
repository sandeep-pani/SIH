import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./home.css";

export default function Home() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div className="main">
      <div>
        <div>
          {/* <div className='container'>
        <img src='https://www.uidai.gov.in/images/logo/aadhaar_english_logo.svg' height={'100px'} width='200px'></img>
      </div> */}
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://www.uidai.gov.in/images/logo/aadhaar_english_logo.svg"
                  class="d-block w-100"
                  id="aadhaar-img"
                  alt="..."
                  height={"100px"}
                />
              </div>
            </div>
          </div>
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Police Station ID
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                Never share your ID with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                PS pin
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <Link to="/Upload">
              <button type="button" class="btn btn-primary btn-lg">
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
