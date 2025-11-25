import "./App.css";
import { FaTiktok, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="page-content-container">
        <div className="intro-sect">
          <h1>Building biblical intellect</h1>
          <div className="span-holder">
            <span className="h1-cap">The hub of Epignosis of Christ</span>
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
          <form action=""></form>
        </div>
        <div className="follow-sect">
          <h2>Follow us on social media</h2>
          <div className="sm-icons">
            <a>
              <FaTiktok className="smicon" />
            </a>
            <a>
              <FaYoutube className="smicon" />
            </a>
            <a>
              <FaInstagram className="smicon" />
            </a>
            <a>
              <FaFacebook className="smicon" />
            </a>
          </div>
        </div>
        <div className="email">
          <h2>Send us an email</h2>
          <a href="#">someone@example.com</a>
        </div>
      </div>
    </div>
  );
}

export default App;
