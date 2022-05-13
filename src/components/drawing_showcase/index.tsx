import React from "react";

const DrawingShowcase = () => {
    const titles = ["Station Sketch #1"];
    const descriptions = ["One of the many sketches of his oc"];
    
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
        </>
    );
}

export default DrawingShowcase;