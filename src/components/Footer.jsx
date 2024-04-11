import React from "react";
const footerText = [
  {
    title: "youtube",
    desc: "유튜브에 오시면 더 많은 강의를 볼 수 있습니다.",
    link: "https://www.youtube.com/@Webstoryboy",
  },
  {
    title: "github",
    desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
    link: "https://github.com/webstoryboy",
  },
];
const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">
        <h2 className="footer__text">
          <div>HwangsWeb</div>
          <div>@webs</div>
        </h2>
        <div className="footer__info">
          <div className="left">
            <div className="title">
              <a href="#">Sign up</a>
            </div>
            <p className="desc">
              회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.
            </p>
          </div>
          <div className="right">
            <h3>Social</h3>
            <ul>
              <li>
                <a
                  href={footerText[0].link}
                  target="_black"
                  rel="noopener norefferer"
                >
                  {footerText[0].title}
                </a>
                <em>{footerText[0].desc}</em>
              </li>
              <li>
                <a
                  href={footerText[1].link}
                  target="_black"
                  rel="noopener norefferer"
                >
                  {footerText[1].title}
                </a>
                <em>{footerText[1].desc}</em>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right">
          &copy; 2023 hwangsweb
          <br />이 사이트는 react를 이용하여 제작하였습니다.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
