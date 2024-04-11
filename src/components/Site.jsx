import React from "react";

const siteTitle = {
  title: ["Site Coding", "나의 작업물"],
};
const siteText = [
  {
    text: ["Make", "site compliant", "vite"],
    title: "VITE를 이용한 사이트 제작",
    codeUrl: ["https://github.com/webstoryboy/port2023-vite"],
    viewUrl: ["https://port2023-vite.netlify.app/"],
    info: [
      "site coding",
      "production period : two days",
      "use stack : html5/css3, CSS Variable, Vite",
    ],
  },
  {
    text: ["Make", "site compliant", "react.js"],
    title: "REACT를 이용한 사이트 제작",
    codeUrl: ["https://github.com/webstoryboy/port2023-react"],
    viewUrl: ["https://port2023-react.netlify.app/"],
    info: [
      "site coding",
      "production period : two days",
      "use stack : html5/css3, CSS Variable, React",
    ],
  },
  {
    text: ["Make", "site compliant", "vue.js"],
    title: "Vue를 이용한 사이트 제작",
    codeUrl: ["https://github.com/webstoryboy/port2023-Vue"],
    viewUrl: ["https://port2023-Vue.netlify.app/"],
    info: [
      "site coding",
      "production period : two days",
      "use stack : html5/css3, CSS Variable, Vue",
    ],
  },
  {
    text: ["Make", "site compliant", "next.js"],
    title: "NEXT를 이용한 사이트 제작",
    codeUrl: ["https://github.com/webstoryboy/port2023-next"],
    viewUrl: ["https://port2023-next.netlify.app/"],
    info: [
      "site coding",
      "production period : two days",
      "use stack : html5/css3, CSS Variable, Next",
    ],
  },
];
const Site = () => {
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">
          {siteTitle.title[0]} <em>{siteTitle.title[1]}</em>
        </h2>
        <div className="site__wrap">
          {siteText.map((site, key) => (
            <article className={`site__item s${key + 1}`} key={key}>
              <span className="num">{key + 1}.</span>
              <div className="text">
                <div>{site.text[0]}</div>
                <div>{site.text[1]}</div>
                <div>{site.text[2]}</div>
              </div>
              <h3 className="title">{site.title}</h3>
              <div className="btn">
                <a href={site.codeUrl}>code</a>
                <a href={site.viewUrl}>view</a>
              </div>
              <div className="info">
                <span>{site.info[0]}</span>
                <span>{site.info[1]}</span>
                <span>{site.info[2]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Site;
