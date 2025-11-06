import newt from "../../assets/newt-mosaic4.png";

export default function homeNewt({style})  {
    return (
        <figure style={style} className='homeNewt'>
            <img src={newt} alt={"firebelly newt home icon"}/>
            <figcaption>abstract mosaic of a firebelly newt</figcaption>
        </figure>
    );
};
