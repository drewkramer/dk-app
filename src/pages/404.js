import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  </div>
)

export default NotFoundPage
