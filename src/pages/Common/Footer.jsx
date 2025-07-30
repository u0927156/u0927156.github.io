import "../../main.css";
import LinkedInIcon from "../../assets/LinkedIn_icon.svg";
import GithubIcon from "../../assets/github-mark.svg";

export default function Footer() {
  return (
    <>
      <article id="contact" class="wrapper style4">
        <div class="container medium">
          <div class="col-12">
            <hr />
            <h3>Find me on ...</h3>
            <ul class="social">
              <li>
                <a href="https://www.linkedin.com/in/spencer-peterson-uofu/">
                  <img
                    src={LinkedInIcon}
                    height="50"
                    alt="Link to my LinkedIn"
                  ></img>
                </a>
              </li>
              <li>
                <a href="https://github.com/u0927156">
                  <img
                    src={GithubIcon}
                    height="50"
                    alt="Link to my Github"
                  ></img>
                </a>
              </li>
            </ul>
            <hr />
          </div>
        </div>
        <footer>
          <ul id="copyright">
            <li>&copy; Spencer Peterson. All rights reserved.</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </footer>
      </article>
    </>
  );
}
