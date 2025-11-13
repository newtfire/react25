import {useState} from "react";
import Newt from "../Newt/Newt.jsx";
import Image from "../Images/Images.jsx";
import {ClickDisplay} from "../../data.js";


function Home() {
const [rotate, setRotate] = useState(0);
const [index, setIndex] = useState(0);
const [imIndex, setImIndex] = useState(0);


const newtClick = () => {
    setRotate(rotate + 30);
    setIndex(index + 1);
    setImIndex((imIndex + 1) % ClickDisplay.length);
}

const currentImage = ClickDisplay[imIndex]
    return (
<>
    <div className="Newts" style={{background: `rgb(${index * 5}, 55, 55)`}}>
        <Newt style={{transform: `rotate(${rotate}deg)`}}/>
        <Newt style={{transform: `rotate(${-rotate}deg)`}}/>
    </div>
    <div className="Pictures">
        <button onClick = {newtClick} type="button">
        click to turn the newts and change the picture
        </button>
        <Image pic={currentImage}/>
    </div>
    <p>The rotation value is now {rotate} degrees.</p>
    <p>The index value is now {index}.</p>
    <p>The imIndex value is now {imIndex}</p>
</>
)

}

export default Home;