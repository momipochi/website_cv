import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./App.css";
import myresume from "./assets/my_resume-sh.pdf";
import pjatkLogo from "./assets/pjatk.png";
import snowflakeLogo from "./assets/snowflake.png";
import webscrapers from "./assets/webscraper.png";
import ecgthesis from "./assets/ecg.png";
import { PortfolioCrad } from "./component/PortolioCard";
import { Sections } from "./component/Sections";
import {
  PERSONAL_PROJECTS,
  PHYSICS_BOMB,
  SNOWFLAKE_ENGINEER,
  UNIVERSITY_TEXT,
  UNIVERSITY_THESIS,
  WEB_SCRAPERS,
  WHAT_CAN_I_DO_FOR_YOU_1,
  WHAT_CAN_I_DO_FOR_YOU_2,
  WHAT_CAN_I_DO_FOR_YOU_3,
} from "./contracts/texts";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
        }}>
        <Parallax pages={3} config={{ tension: 100 }}>
          <ParallaxLayer offset={0}>
            <Sections title="About me">
              <div>
                I am Alex, here is <a href={myresume}>my resume</a> this is
                <a href="https://www.linkedin.com/in/alexander-tu-515092223/">
                  {" my linkedin"}
                </a>
                , I plan to show you most things here on this page but here you
                go.
              </div>
            </Sections>
          </ParallaxLayer>
          <ParallaxLayer offset={0.5} speed={1} factor={0.5}>
            <div style={{ marginRight: "300px" }}>
              <Sections title="Highlights">
                <PortfolioCrad
                  header={{
                    headerText: "Physics bomb",
                    link: "https://github.com/momipochi/physics_bomb",
                  }}
                  body={{
                    bodyText: PHYSICS_BOMB,
                    embedContent: (
                      <iframe
                        src={"./physics_bomb/index.html"}
                        width={250}
                        height={250}
                      />
                    ),
                  }}
                  options={{ triggerOnce: false, fadeDirections: "left" }}
                />
                <PortfolioCrad
                  header={{
                    headerText: "Web-scrapers",
                    link: "https://github.com/momipochi/exh",
                  }}
                  body={{
                    bodyText: WEB_SCRAPERS,
                    embedContent: (
                      <img src={webscrapers} width={500} height={350}></img>
                    ),
                  }}
                  options={{ triggerOnce: false, fadeDirections: "right" }}
                />
                <PortfolioCrad
                  header={{ headerText: "University thesis" }}
                  body={{
                    bodyText: UNIVERSITY_THESIS,
                    embedContent: (
                      <img src={ecgthesis} width={450} height={250}></img>
                    ),
                  }}
                  options={{ triggerOnce: false, fadeDirections: "left" }}
                />
              </Sections>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.4} speed={1}>
            <Sections title="Experience">
              <div>
                <a href={myresume}>
                  <h2>My Resume</h2>
                </a>
              </div>
              <VerticalTimeline layout="2-columns">
                <VerticalTimelineElement
                  contentStyle={{
                    background: "rgb(200, 0, 0)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(200, 0, 0)",
                  }}
                  date="2019, Oct - 2023, March"
                  iconStyle={{ background: "rgb(255,255,255)", color: "#fff" }}
                  icon={
                    <img
                      style={{ marginTop: "8px" }}
                      width="45px"
                      height="45px"
                      src={pjatkLogo}
                    />
                  }>
                  <h3 className="vertical-timeline-element-title">
                    Computer Science
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Warsaw, Poland
                  </h4>
                  <p>{UNIVERSITY_TEXT}</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  contentStyle={{
                    background: "rgb(33, 150, 243)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date="2022, Oct - 2023, April ."
                  iconStyle={{ background: "rgb(255,255,255)", color: "#fff" }}
                  icon={
                    <img
                      style={{ marginTop: "4px" }}
                      width="50px"
                      height="50px"
                      src={snowflakeLogo}
                    />
                  }>
                  <h3 className="vertical-timeline-element-title">
                    Software Engineer
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Warsaw, Poland
                  </h4>
                  <p>{SNOWFLAKE_ENGINEER}</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  contentStyle={{
                    background: "rgb(0,0,0)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(0,0,0)",
                  }}
                  date="End of time"
                  iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}>
                  <h3 className="vertical-timeline-element-title">
                    Personal Projects
                  </h3>
                  <p>{PERSONAL_PROJECTS}</p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </Sections>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1}>
            <Sections title="What can I do for you?">
              <div style={{ textAlign: "left" }}>
                <p>{WHAT_CAN_I_DO_FOR_YOU_1}</p>
                <p>{WHAT_CAN_I_DO_FOR_YOU_2}</p>
                <p>{WHAT_CAN_I_DO_FOR_YOU_3}</p>
              </div>
            </Sections>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
