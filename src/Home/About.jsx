import Image from "../components/Image";
import Headings from "../components/Headings";
import "../CSS/about.scss";
import ParaCards from "../components/ParaCards";
import Img from "../images/Abu Azhar.jpg"
import Counter from "../components/Counter";
export default function About() {
  return (
    <>
      <div className="About">
        <Image />
        <div className="Right-About">
          <Headings />
          <div className="About-content">
            <div className="small-img">
              <img src={Img} alt="small-Profile" />
            </div>
            <div className="heading-cards">
              <div className="para">
                <h2>I'M ABU AZHAR</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatibus velit alias, ullam vero optio possimus culpa odit
                  excepturi nihil doloremque, fuga nesciunt nobis autem.
                  Repudiandae eveniet architecto blanditiis? Eius, quibusdam?
                </p>
              </div>
              <div className="cards">
                <ParaCards/>
                <ParaCards/>
                <ParaCards/>
                <ParaCards/>
              </div>
            </div>
          </div>
          <div className="CV-bttn">
            <hr />
            <button>DOWNLOAD CV</button>
          </div>
          <div className="counter-works">
            <Counter/>
            <Counter/>
            <Counter/>
            <Counter/>
          </div>
        </div>
      </div>
    </>
  );
}
