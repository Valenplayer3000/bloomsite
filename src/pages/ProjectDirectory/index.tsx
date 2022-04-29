import React from "react";
import { Link } from "react-router-dom";

const ProjectDirectory = () => {
    return (
        <>
            <h1 className="bold">Project Directory</h1>
            <hr />
            <div className="active-project-container">
                <div className="active-dev">
                    <h2 className="bold">Perezbueno.xyz</h2>
                    <p>The page for family projects made for a small nieche project for a coding class</p>
                    <a href="https://perezbueno.xyz"><button className="button link">Go to website</button></a>
                </div>
            </div>
        </>
    );
}

export default ProjectDirectory;