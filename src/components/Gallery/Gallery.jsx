import {ClickDisplay} from "../../data.js";
import {useState} from "react";


function List({selectedKind}) {
    console.log('what is sent to list?' + selectedKind )

    const filtered = ClickDisplay.filter(pic =>
        pic.kind === selectedKind
    );
    console.log('what is choice?' + filtered);
    /*const electrics = galleryData.filter(pic =>
        pic.kind === 'electric art'
    );*/
    return (
        <section className={"gallery"}>
            {filtered.map(pic => (
                <figure key={pic.id}>
                    <img src={pic.src} alt={pic.name}/>
                    <figcaption>
                        <span className="strong">{pic.name}:</span>{pic.note}
                    </figcaption>
                </figure>
            ))}
                </section>);
            }

function Selector() {
    const kinds = [...new Set(ClickDisplay.map(pic => pic.kind))];
                /* Some nifty JSX stuff here: Set() takes distinct values.
                We use new with Set to indicate this is something being made, not called from somewhere else.
                                We say, "make a new set" out of this stuff to remove duplicates in it.
                 ... is a "spread" and a way of saying for-each item in here take it one by one.

                 I had originally written this in three steps:
                 const pictureKinds = galleryData.map(obj => obj['kind']);
                 const uniqueKinds = new Set(pictureKinds);
                 const arrayKinds = Array.from(uniqueKinds);
                 ... new Set() lets me basically do all that in one const.
                 */
            const [selectedKind, setSelectedKind] = useState(kinds[0]);
            /* Here I'm applying React's useState, with the usual variable and setVariable construction */
    return (
        <>
            <div className={"selectionBar"}>
                {kinds.map(kind => (
                    <label key={kind}>
                        <input
                            type="radio"
                            name="choosePic"
                            value={kind}
                            checked={selectedKind === kind}
                            onChange={e => setSelectedKind(e.target.value)}
                        />
                        {kind}
                    </label>
                ))}
            </div>
            <p>
                Selection: <strong>{selectedKind}</strong>
            </p>
            <List selectedKind={selectedKind} />

        </>

    )
}

const Gallery = () => {
    return (
        <div>
            <h1>Check out the galleries!</h1>
            <>
                <Selector />

            </>

        </div>);
};

export default Gallery;

