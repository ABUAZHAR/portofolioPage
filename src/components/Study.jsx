// import BsFillHandbagFill from "react-icons/bs";
import { MdShoppingBag } from "react-icons/md";
import "../CSS/study.scss"

export default function Study() {
  return (
    <div className="Study">
      <div className="top-content">
        <MdShoppingBag className="exp-icon" />
        <div className="text-content">
          <h3>Google</h3>
          <p>OCT 2015 - JUNE 2016</p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo
      </p>
    </div>
  );
}
