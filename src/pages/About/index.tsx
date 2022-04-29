import React from "react";

const About = () => {
    return (
        <>
            <h1 className="title bold">About StationaryStation</h1>
            <hr />
            <h2 className="bold">Projects</h2>
            <div className="project-container">
                <div className="project c1">
                    <h3 className="project-header">StationBot</h3>
                    <p className="project-subtitle">A nodejs bot made with the discord.js library focused on performance and customability</p>
                </div>
                <div className="project c2">
                    <h3 className="project-header">Perezbueno.xyz</h3>
                    <p className="project-subtitle">Family page for small projects made in next.js and react</p>
                </div>
                <div className="project c3">
                    <h3 className="project-header">Gtk-rs example</h3>
                    <p className="project-subtitle">A example application made to learn rust and the gtk4 framework</p>
                </div>
            </div>
            <hr />
            <h2 className="bold">Drawings</h2>
            <div className="drawing-container">
                <div className="drawing c1">
                    <h3 className="drawing-header">Comming soon...</h3>
                </div>
            </div>
            <hr />
            <h2 className="bold">Information</h2>
            <p className="content">Stationarystation (also known as @DumplingFurry on twitter) is a 15 year old teenage developer who likes drawing and coding part-time projects that he enjoys making and as well challenge himself to be better at something he loves watching. He plays Krunker.io, Team Fortress 2, Minecraft, Trackmania Nations Forever, Trackmania 2 Stadium, Quaver and Osu!</p>
            <p className="content">One of his best projects so far has been StationBot, a Discord.JS (v12) bot made because he wanted to try and make something new that would help him on his javascript/typescript journey. To learn more about the bot <a href="https://github.com/stationarystation/stationbot">click here</a>.</p>
        </>
    );
}

export default About;