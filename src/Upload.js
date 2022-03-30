import React from "react";
import { Link } from "react-router-dom";
import "./upload.css";
// import ImagesExample from './'
export default function () {
  return (
    <div className="main">
      <div>
        <h1>Upload Fingerprint</h1>
        <div className="container">
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/06/Fingerprint-Free-Download-PNG.png"
            height={"300px"}
            width={"300px"}
            margin={"51px"}
          ></img>
        </div>
        <p>Upload Fingerprint here:</p>
        <button type="button" class="btn btn-primary btn-lg">
          UPLOAD
        </button>
        <br />
        <br />

        <Link to="/search">
          <button type="button" class="btn btn-success">
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}
