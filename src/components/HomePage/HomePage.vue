<script lang="ts" setup>
import { backgroundAnimation, nextBackgroundMode } from "./backgroundAnimation";
import { AmigoRoutes } from "../../routing/Routes";
</script>

<template>
  <div id="pageContainer">
    <canvas id="background-animation" />
    <div id="home-content">
      <div class="header">
        <h1>
          Alexander Tu
          <a target="_blank" href="https://github.com/momipochi"
            ><img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt=""
          /></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/alexander-tu-515092223/"
            ><img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt=""
          /></a>
        </h1>
        <h2>
          <router-link class="link" :to="AmigoRoutes.aboutpage.path">
            <div class="animated-button">
              <span class="text">Cool button</span>
              <span class="arrow">&#8594;</span>
            </div></router-link
          >
        </h2>
      </div>
      <div class="hrLine" />
      <div class="body-container">
        <div>
          <div class="body">
            <div>
              <h2>I am a Software Developer</h2>
              <h2>Coding is life</h2>
            </div>
            <div>
              <h3>I don't update the website often</h3>
              <h3>
                I might add some images for projects which I cannot share git
                repo
              </h3>
            </div>
          </div>

          <div class="beginChat" v-on:click="nextBackground">
            <h2>Click me</h2>
          </div>
        </div>
        <div class="canvas-container">
          <div id="right-side-animation">
            <h1>
              <span class="typed-text">{{ typeValue }}</span>
              <span class="blinking-cursor">|</span>
              <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
            </h1>
          </div>
        </div>
      </div>
      <div class="content">
        <div id="aboutme" class="body3">
          <h1>About me</h1>
          <div>
            I have been programming for a while. I know C#,
            Javascript/Typescript, Python, Rust, C++, bash, powershell, Docker,
            Azure, Latex... but these are not important. Any language can do the
            job. What is more important is that I know common design patterns,
            architectures, communication techniques, etc. At the end of the day
            it is the logic that matters.
          </div>
        </div>
        <div id="snowflake" class="body2">
          <h1>Internship at Snowflake</h1>
          <div>
            <h2>Description</h2>
            <p>
              During university study I got into a company called Snowflake that
              specializaes in cloud computing. The entire intership lasted 7
              months from October to May. Snowflake wanted exclusively students.
              I graduated during the internship so I had to leave.
            </p>
          </div>
          <div>
            <h2>ReactTS</h2>
            <p>
              At Snowflake, I was part of a UI team. This is when I first got to
              meet many great senior developers. I was able to learn a lot from
              them through pair programming and learned things about React that
              I did not know.
            </p>
          </div>
          <div>
            <h2>Snowvation</h2>
            <p>
              Ahh, snowvation. It was pretty cool to participate in a hackathon.
              Although we did not "win" it was definitely fun to cook up some
              cool stuffs with the team.
            </p>
          </div>
          <div>
            <h2>Life at an enterprise</h2>
            <p>
              It was big. Like, huge. Great people, albeit it is quite difficult
              to find "really bad people". It was easy to fit in and I got to
              know how it is like working in an SCRUM and AGILE workflow.
            </p>
          </div>
        </div>
        <div id="personal-projects" class="body2">
          <h1>
            Projects
            <a
              target="_blank"
              href="https://github.com/momipochi?tab=repositories"
              ><img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt=""
            /></a>
          </h1>
          <div>
            <h2>
              This website
              <a target="_blank" href="https://github.com/momipochi/websitecv"
                ><img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
              /></a>
            </h2>
            <div>
              Well, this website. It took a while to get the background
              animation working but damn it looks good, I hope you like it too.
            </div>
          </div>
          <div>
            <h2>Real-time video/voice chat</h2>
            <div>
              Currently, I am developing a website that can perform peer-to-peer
              connection through webrtc. Not only do I now know how discord
              chats work I also learned a lot about websockets as it was needed
              for the handshake.
            </div>
          </div>
          <div>
            <h2>
              Physics bomb
              <a
                target="_blank"
                href="https://github.com/momipochi/physics_bomb
"
                ><img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
              /></a>
            </h2>
            <div>
              This is one of my favorite project, mainly beacuse it is the first
              project that is physics related. It just has that "calculating" or
              "simulating" vibe going on and not just "display some texts".
            </div>
          </div>
          <div>
            <h2>
              Web scraper
              <a target="_blank" href="https://github.com/momipochi/exh"
                ><img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
              /></a>
            </h2>
            <div>
              It is hard to think of another tool more practical than web
              scrapers. The more often you use it the more it pays off to have
              written the program in the first place. This also taught me a
              whole lot about HTTP requests, how you can circumvent and do some
              "hacky stuffs".
            </div>
          </div>
          <div>
            <h2>Thesis</h2>
            <div>
              My university thesis was a web app for student at University of
              Warsaw to train on sickness recognition. The students can use the
              app to receive tasks from the teachers and receive grades.
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="footer">
        <div>Nothing much</div>
      </div> -->
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      backgroundCanvas: {} as HTMLCanvasElement,
      typeValue: "",
      typeStatus: false,
      displayTextArray: [
        "Greetings",
        "This is my website",
        "Look around",
        "You can change the background",
      ],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  async mounted() {
    this.backgroundCanvas = document.getElementById(
      "background-animation"
    ) as HTMLCanvasElement;
    backgroundAnimation(this.backgroundCanvas);
  },
  methods: {
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    nextBackground() {
      nextBackgroundMode(this.backgroundCanvas);
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./homePageStyle.scss";
</style>
