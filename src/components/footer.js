import { useEffect } from "react";

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
