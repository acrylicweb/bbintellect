import "./App.css";
import { FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";
import Form from "./form";

function App() {
  return (
    <div className="App">
      <img
        src="https://d14n4fsapeewqj.cloudfront.net/temp/desktoptemp.webp"
        alt=""
        className="desktop"
      />
      <img
        src="https://d14n4fsapeewqj.cloudfront.net/temp/ipadtemp.webp"
        alt=""
        className="tablet"
      />
      <img
        src="https://d14n4fsapeewqj.cloudfront.net/temp/mobiletemp.webp"
        alt=""
        className="mobile"
      />
      <div className="page-content-container">
        <div className="intro-sect">
          <img
            src="https://d14n4fsapeewqj.cloudfront.net/temp/bbilogo.webp"
            alt="bbi logo"
            className="bbilogo"
          />
          <div className="span-holder">
            <span className="h1-cap">Hub of the Epignosis of Christ</span>
            <span className="span2">
              <i>with Pastor Eldridge Asamoah</i>
            </span>
          </div>
        </div>
        <div className="mailinglist-sect">
          <div className="text">
            <h2>Sign up to our mailing list</h2>
            <span>Get weekly devotionals from January 2026</span>
          </div>
          <Form />
        </div>
        <div className="follow-sect">
          <h2>Follow us on social media</h2>
          <div className="sm-icons">
            <a href="https://www.tiktok.com/@bbintellect?_r=1&_t=ZN-91it1tqn9p0">
              <FaTiktok className="smicon" />
            </a>
            <a href="https://www.youtube.com/@BuildingBiblicalIntellect">
              <FaYoutube className="smicon" />
            </a>
            <a href="https://www.instagram.com/bbintellect?igsh=cHFqeTFmNW42dDRv">
              <FaInstagram className="smicon" />
            </a>
          </div>
        </div>
        <div className="email">
          <h2>Send us an email</h2>
          <a href="mailto:bbintellect.org@gmail.com">
            bbintellect.org@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
