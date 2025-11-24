import "./App.css";
import { FaTiktok, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="page-content-container">
        <div className="intro-sect">
          <h1>Building biblical intellect</h1>
          <span className="h1-cap">Revealing Jesus through his word.</span>
          <span>with Pastor Eldridge Opoku Asamoah</span>
        </div>
        <div className="mailinglist-sect">
          <div className="text">
            <h2>Sign up to our mailing list</h2>
            <span>Get weekly devotionals from January 2026</span>
          </div>
          <form action=""></form>
          <div className="follow-sect">
            <h2>Follow us on social media</h2>
            <div className="sm-icons">
              <FaTiktok /> <FaYoutube /> <FaInstagram /> <FaFacebook />
            </div>
          </div>

          <div className="email">
            <h2>Send us an email</h2>
            <a href="#">someone@example.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
