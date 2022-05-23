import React from "react";

interface postProps {
    title: string;
    date: string;
    author: string;
    content: string;
}

const PostsComponent = (props: postProps) => {
    let contentArr: Array<string> = props.content.split(/\r?\\n/);
    console.log(contentArr);
    return (
        <div className="post-container">
        <h3 className="title bold">
          {props.title} 
        </h3>
        <code className="metadata">
          <span className="statement">Written by:</span> {props.author}{" "}
          <span className="var">@</span> | <span className="func">{props.date}</span>{" "}
        </code>
          { contentArr.map
            // c is the content that is going to be returned
            (c => {
              return (
                <p className="content">{c}</p>
              )
            }
          )
          }
      </div>
    )
}

export default PostsComponent;