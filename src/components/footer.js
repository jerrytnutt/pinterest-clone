const Footer = () => {
  return (
    <div className="footer">
      <i
        onClick={() => {
          window.open("https://github.com/jerrytnutt/pinterest-clone");
        }}
        className="fa fa-github"
        aria-hidden="true"
      ></i>
    </div>
  );
};
export default Footer;
