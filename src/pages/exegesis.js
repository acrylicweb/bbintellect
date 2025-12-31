import { devotionaldata } from "../data/devotionals";
import { HashLink as Link } from "react-router-hash-link";
import scrollToTop from "../components/scrollToTop";
import Form from "../components/form";
const ExegesisPage = () => {
  const latest = devotionaldata[devotionaldata.length - 1];
  if (!latest) return null;

  const itemsExceptLastReversed = devotionaldata
    .slice(0, -1) // all except last
    .reverse(); // reverse those items
  return (
    <>
      <div className="page-container exegesis-page-container">
        <div className="hero">
          <img src={latest.img} alt={latest.imgname} />
        </div>
        <div className="latest-entry-intro">
          <div className="datentitle">
            <span>{latest.releasedate}</span>
            <h1>{latest.title}</h1>
          </div>
          <div>{latest.intropara}</div>
          <Link to={`/exegesis${latest.link}`} onClick={scrollToTop}>
            <button>Read more</button>
          </Link>
        </div>
        {devotionaldata.length > 1 && (
          <div className="sect2">
            <h2>More Biblical exegesis entries</h2>
            <div className="dev-previews-container">
              {itemsExceptLastReversed.map((entries) => (
                <div className="devotional-preview-container" key={entries.id}>
                  <img src={entries.img} alt="" />
                  <h3>{entries.title}</h3>
                  <div>{entries.intropara}</div>
                  <Link to={`/exegesis${entries.link}`} onClick={scrollToTop}>
                    <button>Read more</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="sect3">
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

export default ExegesisPage;
