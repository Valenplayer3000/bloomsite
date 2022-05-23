import React from "react";

interface postProps {
    title: string;
    date?: string;
    author?: string;
    content: string;
}

/**
 * ---
 * Post Component
 * @author Stationarystation <raulytstation@outlook.com>
 * ---
 *
 * @description A simple post component
 *  
 * @param {string} title - Post title
 * @param {string} date - Date posted
 * @param {string} author - Post Author
 * @param {string} content - Post Content (Allows \n to create new lines)
 * 
 * @returns {HTMLDivElement} Prop-container
 * 
 * @example
 * Make a post with a title of "Hello World" with the content "Hello World!"
 * ```tsx
 * <PostsComponent
 *  title="Hello World"
 *  content="Hello World!"
 * />
 * ``` 
 */
const PostsComponent = (props: postProps) => {
    /**
     * @type {Array<string>}
     */
    let contentArr: Array<string> = props.content.split(/\r?\\n/);

    // Log the content (Debbugging)
    console.log(contentArr? contentArr : "No data found");
    
    // Return the post container
    return (
        <div className="post-container">
        <h3 className="title bold">
          {props.title} 
        </h3>
        {/* If Props.date and Props.author exists */}
        {/* Create Metadata component */}
        {/* else do nothing */}
        {props.date && props.author ? (
          <code className="metadata">
            <span className="statement">Written by:</span> {props.author}{" "}
            <span className="var">@</span> | <span className="func">{props.date}</span>{" "}
          </code>
        ): (
          null
        )
        }

        {/* For Each Loop */}
        { contentArr.map
          // c is the content that is going to be returned
          (c => {
              return (
                <p className="content">
                  {c}
                </p>
              )
            }
          )
        }
      </div>
    )
}

export default PostsComponent;