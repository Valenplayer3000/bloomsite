import React from "react";

const DrawingShowcase = () => {
    const titles = ["Station Sketch #1", "No thoughts, Head empty"];
    const descriptions = ["One of the many sketches of his oc", "Dumb drawing made for the memes and to practice coloring with a base20 colorscheme"];
    
    return (
        <>
        <div className="Drawing">
            <p className="title title-small">{titles[0]}</p>
            <p className="description">{descriptions[0]}</p>
            <img
            width={256}
            height={256}
            src="/assets/img/station.png"
            alt={titles[0] + " " + descriptions[0]}
            />
        </div>
        <div className="Drawing">
            <p className="title title-small">{titles[1]}</p>
            <p className="description">{descriptions[1]}</p>
            <img
                width={256}
                height={256}
                src="/assets/img/no_thoughts_head_empty.png"
                alt={titles[1] + " " + descriptions[1]}
            />
        </div>
        </>
    );
}

export default DrawingShowcase;