import React from "react";

interface postProps {
    title: string;
    date: string;
    author: string;
    content: string;
}

const PostsComponent = (props: postProps) => {
    return (
        <div className="post-container">
        <h3 className="title bold">
         {props.title} 
        </h3>
        <code className="metadata">
          <span className="statement">Written by:</span> {props.author}{" "}
          <span className="var">@</span> | <span className="func">{props.date}</span>{" "}
        </code>
        <p className="content">
          {props.content}
        </p>
      </div>
    )
}

export default PostsComponent;