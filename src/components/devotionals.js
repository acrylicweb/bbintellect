import { devotionaldata } from "../data/devotionals";
import { HashLink as Link } from "react-router-hash-link";
import scrollToTop from "../components/scrollToTop";

const DevotionalPreview = () => {
  return (
    <>
      <div className="dev-previews-container">
        {devotionaldata
          .slice(-3)
          .reverse()
          .map((devotional) => (
            <div className="devotional-preview-container" key={devotional.id}>
              <img src={devotional.img} alt="" />
              <h3>{devotional.title}</h3>
              <div>{devotional.intropara}</div>
              <Link to={`/exegesis${devotional.link}`} onClick={scrollToTop}>
                <button>Read more</button>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default DevotionalPreview;
