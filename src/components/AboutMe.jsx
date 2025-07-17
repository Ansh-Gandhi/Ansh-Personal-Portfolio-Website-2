import React from "react";
import "./styling/AboutMe.css";
import myPhoto from "../assests/images/self_pic.jpg"; 

function AboutMe() {
  return (
    <section id="about" className="about-section">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hi! I'm Ansh, a passionate developer focused on building efficent and reliable code. 
        </p>
        <p>
            Throughout my journey, I've embodied diligence, focus, and an unwavering commitment to achieving my goals. Driven by a passion for problem-solving, I navigate challenges with the precision of an analytical thinker, utilizing newly gained knowledge to devise a variety of effective solutions to intricate problems. With each new lesson learned, I embrace the opportunity to refine my approach, continually expanding my collection of strategies to tackle even the most challenging of problems.
        </p>
        <p>Currently, I am pursuing my Bachelor of Applied Science in Computer Engineering at the University of British Columbia where I seek to apply my skills and create new technologies.</p>
        <p>
          In addition to programming, some of my other hobbies include going to the gym, playing basketball, hanging out with friends, and listening to music. Feel free to explore my experience or projects and get in touch!
        </p>
      </div>
      <div className="about-image">
        <img src={myPhoto} alt="About me" />
      </div>
    </section>
  );
}

export default AboutMe;
