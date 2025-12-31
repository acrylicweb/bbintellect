import Form from "../components/form";
import { HashLink as Link } from "react-router-hash-link";
import scrollToTop from "../components/scrollToTop";
import DevotionalPreview from "../components/devotionals";
const HomePage = () => {
  return (
    <>
      <div className="page-container home-page-container">
        <div className="sect home-hero">
          <img
            src="https://d14n4fsapeewqj.cloudfront.net/home/desktop-home-hero.webp"
            alt=""
            className="desktop-hero"
          />
          <img
            src="https://d14n4fsapeewqj.cloudfront.net/home/home-ipadhero.webp"
            alt=""
            className="ipad-hero"
          />{" "}
          <img
            src="https://d14n4fsapeewqj.cloudfront.net/home/home-mobilehero.webp"
            alt=""
            className="mobile-hero"
          />
          <div className="text">
            <h1>Building Biblical Intellect </h1>
            <span className="h1-cap">Hub of the Epignosis of Christ</span>
          </div>
        </div>
        <div className="sect sect2">
          <h2 className="mobileh2">What is BBI</h2>
          <div className="text">
            <h2>What is BBI</h2>
            <p>
              BBI is a training and equipping platform that aims to build people
              with the accurate revelation and understanding of the Word of God
              through the scriptures. Our objective is to reveal the wisdom and
              intent of our Lord Jesus Christ by addressing the deeper
              complexities of scripture, while providing clarity to God’s word
              by decrypting its seemingly paradoxical elements in order to build
              the faith of believers at any level of their journey.
            </p>{" "}
            <Link to="/about" onClick={scrollToTop}>
              {" "}
              <button>Learn more</button>
            </Link>
          </div>
          <img
            src="https://d14n4fsapeewqj.cloudfront.net/home/homesect2.webp"
            alt=""
          />
        </div>
        <div className="sect sect3">
          <h2>Dive into the word with us!</h2>
          <p>
            Our Biblical Exegesis section breaks down the Word of God, providing
            context and clarity. Each entry is a deep well from which the wisdom
            and intent of God, as enshrouded in the Scriptures, is revealed.
          </p>
          <div className="entries">
            <DevotionalPreview />
          </div>{" "}
          <Link to="/exegesis" onClick={scrollToTop}>
            {" "}
            <button>View all entries</button>
          </Link>
        </div>
        <div className="sect homemailing">
          <img
            src="https://d14n4fsapeewqj.cloudfront.net/home/homemailing.webp"
            alt=""
          />
          <div className="form">
            <div className="intro">
              <h2>Sign up to our mailing list!</h2>
              <span>
                Join our community to gain exclusive access to new release
                notifications, announcements website updates and more!
              </span>
            </div>
            <Form formId="Mailing" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
