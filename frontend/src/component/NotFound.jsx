import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div>
        <h1>404</h1>
         <p className="message">Go to home page? <Link to="/"><button>click</button></Link></p>
    </div>
  )
}

export default NotFound
