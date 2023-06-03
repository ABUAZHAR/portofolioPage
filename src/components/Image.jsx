import Profile from "../images/Abu Azhar.jpg";
import "../CSS/image.scss"
export default function Image() {
  return (
    <div className="main-img">
      <div className="img-container">
        <img src={Profile} alt="Profile" />
      </div>
    </div>
  );
}
