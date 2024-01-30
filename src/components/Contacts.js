import { useState, useEffect } from "react";
import ContactUsForm from "./ContactUsForm";

const Contacts = ({ menuOpen }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (menuOpen) {
    return null;
  }

  return (
    <section className="contact-container">
      <div
        className="grapeFieldContainer"
        style={{ backgroundPositionY: `${-scrollPosition * 0.5}px` }}
      >
        <h2 className="titleStyle">Contact Us</h2>
        <p className="contact-text">
          If you have any questions, suggestions, or inquiries, please feel free
          to contact us using the information below.
        </p>
      </div>

      <div className="title-classic">
        <h3 className="title-classic-title">Get in touch</h3>
        <p className="title-classic-subtitle">
          We are available 24/7 by fax, e-mail or by phone. You can also use{" "}
          <br /> our quick contact form to ask a question about our products.
        </p>
      </div>

      <div className="formAndMap">
        <ContactUsForm />
        <div className="map">
          <iframe
            title="Carpineto Wines of Tuscany Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d709784.9767457525!2d9.984933143477031!3d43.942255712930155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132bb4814abeab9d%3A0xd64c050e61a2c68!2sCarpineto%20Wines%20of%20Tuscany!5e0!3m2!1str!2str!4v1706545828004!5m2!1str!2str"
            width="550"
            height="350"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map"
          />
        </div>
      </div>

      <div className="all-contacts">
        <div className="phones">
          <h3 className="newWinesTitle">Phones</h3>
          <div>
            {" "}
            Office:{" "}
            <a href="tel:+1234567890" className="color-change">
              {" "}
              +39 02 1234567
            </a>
          </div>
          <div>
            {" "}
            Fax:{" "}
            <a href="tel:+1234567890" className="color-change">
              {" "}
              +39 02 1234567
            </a>
          </div>
        </div>

        <div className="address">
          <h3 className="newWinesTitle">Address</h3>
          <div>Via dei Neri, 14, 50122 Firenze FI, Italy</div>
        </div>

        <div className="emails">
          <h3 className="newWinesTitle">Emails</h3>
          <div>
            <a href="mailto:#" className="color-change">
              tuscanywinery@info.com
            </a>
          </div>
          <div>
            <a href="mailto:#" className="color-change">
              tuscanyvineyards@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
