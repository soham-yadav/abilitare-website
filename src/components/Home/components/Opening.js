import React from "react";
import "../../../App.css";
import { Button } from "./Button";
import "../Assets/CSS/Opening.css";
import demo_gif from "../../../images/demo_0.gif";

function Opening() {
  return (
    <div className="horizontal-flex">
      <div className="hero-container">
        <h1>Head Controlled Mouse</h1>
        <div className="short-info">
          <p>
            Hand disability should not stop anyone from using a computer or a
            phone
          </p>
          <p>Control the mouse cursor with your head!</p>
        </div>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            href="#sign-up-section"
          >
            Sign Up For Our Beta!
          </Button>
        </div>
      </div>
      <img class="contain" src={demo_gif} alt="" />
    </div>
  );
}

export default Opening;
