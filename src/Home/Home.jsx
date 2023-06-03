// import Profile from "../images/Abu Azhar.jpg";
import Image from "../components/Image";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import "../CSS/home.scss";
export default function Home() {
  return (
    <>
      <div className="home">
        <Image/>
        <div className="right-header">
          <div className="name-header-container">
            <span className="top-text">HELLO THERE</span>
            <h1>I'M ABU AZHAR</h1>
            <span className="developer">FRONT END DEVELOPER</span>
            <button>DOWNLOAD CV</button>
          </div>
          <div className="social-icons">
            <a href="/">
              <AiFillLinkedin />
            </a>
            <a href="/">
              <AiFillTwitterCircle />
            </a>
            <a href="/">
              <AiFillInstagram />
            </a>
            <a href="/">
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
