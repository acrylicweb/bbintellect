import { Icon } from "@iconify/react";
import Form from "../components/form";

const ContactPage = () => {
  return (
    <>
      <div className="page-container contact-page-container">
        <div className="contact-hero">
          <h1>Get in touch with us</h1>
          <span className="h1-cap">
            Ask us any Bible related questions,
            <br /> we are ready to help
          </span>
        </div>
        <div className="contact-main">
          <div className="form">
            <Form formId="Contact" />
          </div>

          <div className="details-container">
            <div className="sect">
              <h4>Follow us</h4>
              <div className="links">
                <a href="https://www.youtube.com/@BuildingBiblicalIntellect">
                  {" "}
                  <Icon icon="mdi:youtube" color="#ff0000" className="icon" />
                  @BuildingBiblicalIntellect
                </a>{" "}
                <a href="https://www.instagram.com/bbintellect?igsh=cHFqeTFmNW42dDRv">
                  <Icon icon="skill-icons:instagram" className="icon" />
                  @bbintellect
                </a>
                <a href="https://www.tiktok.com/@bbintellect?_r=1&_t=ZN-91it1tqn9p0">
                  <Icon
                    icon="ic:baseline-tiktok"
                    color="#000000"
                    className="icon"
                  />
                  @bbintellect
                </a>
              </div>
            </div>
            <div className="sect">
              <h4>Contact us</h4>
              <div className="links">
                <a href="mailto:bbintellect.org@gmail.com">
                  {" "}
                  <Icon icon="line-md:email" className="icon" />
                  bbintellect@gmail.com
                </a>
                <a href="tel:07546984389">
                  <Icon icon="line-md:phone" className="icon" />
                  07546984389
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
