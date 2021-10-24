import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {}, []);

  return (
    <div className="footer">
      <i
        onClick={() => {
          window.open("https://github.com/jerrytnutt/pinterest-clone");
        }}
        class="fa fa-github"
        aria-hidden="true"
      ></i>
    </div>
  );
};
export default Footer;
