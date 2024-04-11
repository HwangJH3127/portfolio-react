import React from "react";

const contactTitle = {
  title: "Contact",
};

const contactText = {
  link: "mailto:whdgusdldl22@naver.com",
  title: "mail : whdgusdldl22@naver.com",
};
const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__inner">
        <h2 className="contact__title">{contactTitle.title}</h2>
        <div className="contact__lines top" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="contact__text">
          <div className="text">
            <div>
              <a
                href={contactText.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactText.title}
              </a>
            </div>
          </div>
        </div>
        <div className="contact__lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
