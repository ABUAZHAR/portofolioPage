import Headings from "../components/Headings";
import Image from "../components/Image";
import "../CSS/resume.scss";
import Study from "../components/Study";
export default function Resume() {
  return (
    <div className='Resume'>
      <Image/>
      <div className="Right-resume">
        <Headings/>
        <div className="study">
        <div className="experience">
          <h2>Experience</h2>
          <Study/>
          <Study/>
        </div>
          <div className="education">
            <h2>Education</h2>
          <Study/>
          <Study/>
          </div>
        </div>
        <div className="skills">
          <div className="design-skills"></div>
          <div className="coding-skills"></div>
        </div>
      </div>
    </div>
  )
}
