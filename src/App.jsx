import {useState} from "react";
import './App.css'
import Newt from './components/Newt/Newt.jsx'

/* The plan:

Rotate the image on click by a varying number of degrees based
on state (number of clicks).

Same state should control other effects on the page, like information or images
revealed.
 */

function App() {

const [rotate, setRotate] = useState(0);
const [index, setIndex] = useState(0);

const newtClick = () => {
    setRotate(rotate + 30);
    console.log('What is the rotation value? ' + rotate);
    setIndex(index + 1);
    console.log('What is the index value?' + index);

}

  return (
    <>
        <div className="App" style={{background: `rgb(${index * 5}, 55, 55)`}}>
            <Newt style={{transform: `rotate(${rotate}deg)`}}/>

            <Newt style={{transform: `rotate(${-rotate}deg)`}}/>

        </div>
        <button onClick = {newtClick} type="button">
            click to turn the newt
        </button>

        <p>The rotation value is now {rotate} degrees.</p>
        <p>The index value is now {index}.</p>
    </>
  )
}

export default App
