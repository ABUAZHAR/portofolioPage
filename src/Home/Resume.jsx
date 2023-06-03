import Headings from "../components/Headings";
import Image from "../components/Image";
import Skilldotnull from "../components/skilldotnull";
import "../CSS/resume.scss";
import Study from "../components/Study";
import Skilldot from "../components/Skilldot";
export default function Resume() {
  return (
    <div className="Resume">
      <Image />
      <div className="Right-resume">
        <Headings />
        <div className="study">
          <div className="experience">
            <h2>Experience</h2>
            <Study />
            <Study />
          </div>
          <div className="education">
            <h2>Education</h2>
            <Study />
            <Study />
          </div>
        </div>
        <div className="skills">
          <div className="skill-heading">
            <h1>MY SKILLS</h1>
          </div>
          <div className="skill-items">
            <div className="web-tech">
              <h2>Web Technologies</h2>
              <div className="web">
                <h5>HTML</h5>
                <div className="resultBox">
                  <Skilldot />
                  <Skilldot />
                  <Skilldot />
                  <Skilldot />
                  <Skilldotnull />
                </div>
              </div>
              <div className="web">
                <h5>CSS</h5>
                <div className="resultBox">
                  <Skilldot />
                  <Skilldot />
                  <Skilldot />
                  <Skilldot />
                  <Skilldotnull />
                </div>
              </div>
              <div className="web">
                <h5>JAVASCRIPT</h5>
                <div className="resultBox">
                  <Skilldot />
                  <Skilldot />
                  <Skilldot />
                  <Skilldotnull />
                  <Skilldotnull />
                </div>
              </div>
              <div className="web">
                <h5>REACT</h5>
                <div className="resultBox">
                  <Skilldot />
                  <Skilldot />
                  <Skilldot />
                  <Skilldotnull />
                  <Skilldotnull />
                </div>
              </div>
            </div>
            <div className="language-tech">
              <h2>Language</h2>
              <div className="lang">
                <h5>HINDI</h5>
                <div className="resultBox">
                  <Skilldot />
                  <Skilldot />
                  <Skilldot />
                  <Skilldot />
                  <Skilldotnull />
                </div>
              </div>    
              <div className="lang">
                <h5>ENGLISH</h5>
                <div className="resultBox">
                  <Skilldot />
                  <Skilldot />
                  <Skilldot />
                  <Skilldotnull />
                  <Skilldotnull />
                </div>
              </div>
              <div className="lang">
                <h5>URDU</h5>
                <div className="resultBox">
                  <Skilldot />
                  <Skilldot />
                  <Skilldot />
                  <Skilldotnull />
                  <Skilldotnull />
                </div>
              </div>
              <div className="lang">
                <h5>OTHER</h5>
                <div className="resultBox">
                  <Skilldot />
                  <Skilldot />
                  <Skilldot />
                  <Skilldotnull />
                  <Skilldotnull />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
