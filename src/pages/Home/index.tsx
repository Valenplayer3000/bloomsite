import React from "react";

const Home = () => {
    return (
        <>
            <div className="title-container">
                <h1 className="title bold">StationaryStation</h1>
                <p className="subtitle medium bold">A teen developer with knowleage of react and typescript</p>
                <button className="button learn">Learn More</button>
            </div>
            <hr />
            <h2>Last Posts</h2>
            <div className="post-container">
                <h3 className="title bold">Hello World</h3>
                <p className="content">This is a post!</p>
            </div>
        </>
    )
}

export default Home;