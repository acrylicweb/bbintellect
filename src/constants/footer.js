import { HashLink as Link } from "react-router-hash-link";
import { Icon } from "@iconify/react";
import scrollToTop from "../components/scrollToTop";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <Link to="/" onClick={scrollToTop}>
          <div className="logo">
            {" "}
            <img
              className="footer-logo"
              src="https://d14n4fsapeewqj.cloudfront.net/temp/ogbbilogo.webp"
              alt="BBI Logo"
            />
          </div>
        </Link>
        <div className="browse">
          <h5>BROWSE</h5>
          <div className="links">
            <Link to="/" onClick={scrollToTop}>
              Home
            </Link>
            <Link to="/exegesis" onClick={scrollToTop}>
              Biblical Exegesis
            </Link>
          </div>
        </div>
        <div className="stayintouch">
          {" "}
          <h5>STAY IN TOUCH</h5>
          <div className="links">
            <Link to="/contact" onClick={scrollToTop}>
              Contact
            </Link>
            <div className="smcontainer">
              <a href="https://www.youtube.com/@BuildingBiblicalIntellect">
                {" "}
                <Icon icon="mdi:youtube" color="#ff0000" className="icon" />
              </a>{" "}
              <a href="https://www.instagram.com/bbintellect?igsh=cHFqeTFmNW42dDRv">
                <Icon icon="skill-icons:instagram" className="icon" />
              </a>
              <a href="https://www.tiktok.com/@bbintellect?_r=1&_t=ZN-91it1tqn9p0">
                <Icon
                  icon="ic:baseline-tiktok"
                  color="#000000"
                  className="icon"
                />
              </a>{" "}
              <a href="mailto:bbintellect.org@gmail.com">
                {" "}
                <Icon icon="line-md:email" className="icon" />
              </a>
              <a href="tel:07546984389">
                <Icon icon="line-md:phone" className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
