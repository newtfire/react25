export default function HomeImage({pic, style})  {
    return (
        <figure key={pic.id} style={style} className='imageShow'>
            <img src={pic.src} alt={pic.note}/>
            <figcaption>{pic.name}: {pic.note}</figcaption>
        </figure>
    );
};

