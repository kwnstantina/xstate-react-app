import React from "react";
import "./staticFooter.css";
import AnimatedFooter from "../animatedFooter/animatedFooter";

const StaticFooter = () => {
  return (
    <div>
      <footer className="footer__distributed">
        <div className="footer__right">
          <a href="/">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="/">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="/">
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div className="footer__left">
          <p>XState & React, 2021</p>
        </div>
        <div>
          <AnimatedFooter />
        </div>
      </footer>
    </div>
  );
};

export default StaticFooter;
