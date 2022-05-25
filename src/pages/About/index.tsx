import React from 'react';
import { Link } from 'react-router-dom';

import DrawingShowcase from '../../components/drawing_showcase';
import QuaverStats from '../../components/quaver';

const About = () => {
  return (
    <>
      <div className="content-container">
        <div className="title-container">
          <h1 className="title bold">About StationaryStation</h1>
        </div>
        <hr />
        <h2 className="bold">Projects</h2>
        <div className="project-container">
          <div className="project">
            <h3 className="project-header">StationBot</h3>
            <p className="project-subtitle">
              A nodejs bot made with the discord.js library focused on
              performance and customability
            </p>
          </div>
          <div className="project">
            <h3 className="project-header">Perezbueno.xyz</h3>
            <p className="project-subtitle">
              Family page for small projects made in next.js and react
            </p>
          </div>
          <div className="project">
            <h3 className="project-header">Gtk-rs example</h3>
            <p className="project-subtitle">
              A example application made to learn rust and the gtk4 framework
            </p>
          </div>
          <div className="project">
            <h3 className="project-header">AtlasOS Wallpaper Pack</h3>
            <p className="project-subtitle">
              A bunch of wallpapers inspired by AtlasOS made by me on my
              &quot;Spare Time&quot;
            </p>
            <div className="button-container">
              <Link
                to={{
                  pathname:
                    "https://github.com/stationarystation/portfolio/raw/master/src/Resources/Downloads/Atlas%20Wallpaper%20Pack.zip",
                }}
                target="_blank"
              >
                <button className="button">Download Now</button>
              </Link>
            </div>
          </div>
          <div className="project">
            <h3 className="project-header">Revolt Wallpapers</h3>
            <p className="project-subtitle">
              Another set of wallpapers made for the revolt community @
              revolt.chat
            </p>
            <div className="button-container">
              <Link
                to={{
                  pathname:
                    "https://github.com/stationaryStation/portfolio/raw/master/src/Resources/Downloads/Revolt%20Wallpapers.zip",
                }}
                target="_blank"
              >
                <button className="button">Download Now</button>
              </Link>
            </div>
          </div>
          <div className="project">
            <h3 className="project-header">Dotfiles</h3>
            <p className="project-subtitle">
              My go-to bspwm config made with love
            </p>
            <div className="button-container">
              <Link
                to={{
                  pathname: "https://github.com/stationaryStation/dotfiles",
                }}
                target="_blank"
              >
                <button className="button">Github Repo</button>
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <h2 className="bold">Drawings</h2>
        <div className="drawing-container">
          <DrawingShowcase />
        </div>
        <hr />
        <h2 className="bold">Information</h2>
        <p className="content">
          Stationarystation (also known as @StationaryStation on miruku.chat) is
          a 15 year old teenage developer who likes drawing and coding part-time
          projects that he enjoys making and as well challenge himself to be
          better at something he loves watching. He plays Krunker.io, Team
          Fortress 2, Minecraft, Trackmania Nations Forever, Trackmania 2
          Stadium, Quaver and Osu!
        </p>
        <h2 className="subtitle">Social Media</h2>
        <p className="content">
          <a rel="me" href="https://based.social/@Stationarystation">
            Mastodon
          </a>
        </p>
        <QuaverStats id={37369} mode={1} />
      </div>
    </>
  );
};

export default About;
