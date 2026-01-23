import { HashLink as Link } from "react-router-hash-link";
import scrollToTop from "../components/scrollToTop";
const IndividualDevotional = ({
  title,
  fullentry,
  introscripture,
  provided,
  notextimg,
  imgname,
}) => {
  return (
    <div className="individual-devotional-container">
      <div className="hero">
        <img src={notextimg} alt={imgname} />
        <h1>{title}</h1>
      </div>
      <div className="intro">{introscripture}</div>
      <div className="text">{fullentry}</div>
      {provided && <div className="scriptures">{provided}</div>}
      <div className="back">
        <Link to="/exegesis" onClick={scrollToTop}>
          <button>Back to all entries</button>
        </Link>
      </div>
    </div>
  );
};

export default IndividualDevotional;
