import {AiOutlineSmile} from "react-icons/ai"
import "../CSS/counter.scss"

export default function Counter() {
  return (
    <div className='Counter'>
      <AiOutlineSmile className="smile"/>
      <div className="counter-texts">
        <h2>50</h2>
        <p>HAPPY CLIENTS</p>
      </div>
    </div>
  )
}
