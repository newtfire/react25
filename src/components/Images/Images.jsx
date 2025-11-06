import {imageData} from "./data.js"

export default function homeImage({style})  {
    return (
        <figure key={imageData.id} style={style} className='imageShow'>
            <img src={imageData.src} alt={imageData.name}/>
            <figcaption>{imageData.note}</figcaption>
        </figure>
    );
};

