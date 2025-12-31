import { HashLink as Link } from "react-router-hash-link";
import scrollToTop from "../components/scrollToTop";
const IndividualDevotional = ({
  releasedate,
  title,
  fullentry,
  introscripture,
  provided,
  img,
  imgname,
}) => {
  return (
    <div className="individual-devotional-container">
      <div className="hero">
        <img src={img} alt={imgname} />
        <span>{releasedate}</span>
        <h1>{title}</h1>
      </div>
      <div className="intro">{introscripture}</div>
      <div className="text">{fullentry}</div>
      <div className="scriptures">{provided}</div>
      <div className="back">
        <Link to="/exegesis" onClick={scrollToTop}>
          <button>Back to all entries</button>
        </Link>
      </div>
    </div>
  );
};

export default IndividualDevotional;
