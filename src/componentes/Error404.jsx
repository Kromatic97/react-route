import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div>
        <h2>Not Found 404</h2>
        <Link to='/'> Go to Home</Link>
    </div>
  )
}

export default Error404