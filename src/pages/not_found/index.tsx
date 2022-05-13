import React from "react"
import { Link } from "react-router-dom"

const not_found = () => {
  return (
    <>
      <div className="title-container">
        <h1 className="title">Page not Found</h1>
      </div>
      <h2>The page you are looking for does not exist...</h2>
      <Link to="/">Go home</Link>
    </>
  )
}

export default not_found
