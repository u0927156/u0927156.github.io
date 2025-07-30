import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./main.css";
import profilePicture from "./assets/IMG-0918.jpg";
import beansPicture from "./assets/shelley-pauls-beans-resized.jpg";
import abbaPicture from "./assets/ABBA.png";
import wordlePicture from "./assets/words_padded.png";
import Header from "./pages/Common/Header";
import Footer from "./pages/Common/Footer";

function Profile() {
  return (
    <>
      <article id="top" className="wrapper style1">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "row" }}>
            {/* <div style={{ flex: 1, flexDirection: "row" }}> */}
            <div
              className="image fit"
              style={{
                width: "32.3333%",
                paddingRight: "2em",
                aspectRatio: 1,
              }}
            >
              <img src={profilePicture} height={400} alt="" />
            </div>
            <div style={{ width: "66.6667%", flex: 2 }}>
              <header>
                <h1>
                  Hello. I'm <strong>Spencer Peterson</strong>.
                </h1>
              </header>
              <p>
                I'm a Data Scientist with expertise in the healthcare industry.
                My experience includes working at Recursion Pharmaceuticals and
                BioFire Diagnostics. I also was the CTO of Aether Masks, a
                student company that raised more than thirty thousand dollars.
                This is a space to show my personal projects, so feel free to
                take a look around. I'm interested in using Python, SQL, and
                data visualization tools to help people and their health.
              </p>
              {/* </div> */}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

function PortfolioBox({
  image,
  imageTitle,
  imageAlt,
  portfolioLink,
  projectTitle,
  projectDesc,
}) {
  return (
    <>
      <div class="col-4 col-6-medium col-12-small">
        <article class="box style2">
          <div class="project-image">
            <a href={portfolioLink} class="image featured">
              <img src={image} alt={imageAlt} title={imageTitle} />
            </a>
          </div>
          <div class="project-description">
            <h3>
              <a href={portfolioLink}>{projectTitle}</a>
            </h3>
            <p>{projectDesc}</p>
          </div>
        </article>
      </div>
    </>
  );
}
function PortfolioLinks() {
  const abbaLink = "./Abba";

  return (
    <article id="portfolio" class="wrapper style3">
      <div class="container">
        <header>
          <h2>My Projects</h2>
        </header>

        <div class="row">
          <PortfolioBox
            image={abbaPicture}
            imageTitle={
              "Image by AVRO - FTA001019454_012 from Beeld & Geluid wiki, CC BY-SA 3.0 nl"
            }
            imageAlt={"A picture of ABBA."}
            portfolioLink={"./Abba"}
            projectTitle={"Gimme, Gimme, Gimme (an Analysis of Abba)"}
            projectDesc={"I rated all 112 ABBA songs, here's what I learned."}
          />

          <PortfolioBox
            image={wordlePicture}
            imageTitle={"Words in a WORDLE Format"}
            imageAlt={"A picture of the word WORDS."}
            portfolioLink={"./Wordle"}
            projectTitle={"Wordle Solver"}
            projectDesc={"I got tired of losing."}
          />

          <PortfolioBox
            image={beansPicture}
            imageTitle={"A picture of loose beans."}
            imageAlt={"A picture of loose beans."}
            portfolioLink={"./Beans"}
            projectTitle={"Beans?"}
            projectDesc={
              "Can we use a neural network to predict what type of bean we're looking at?"
            }
          />
        </div>
        <footer>
          <p>I'm always working on something, so check back later.</p>
        </footer>
      </div>
    </article>
  );
}

function App() {
  return (
    <>
      <Header />
      <Profile />
      <PortfolioLinks />
      <Footer />
    </>
  );
}

export default App;
