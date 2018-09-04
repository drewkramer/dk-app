import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero';

const NotFoundPage = () => (
  <div>
    <Hero
      image={require('../images/wallpaper4.jpg')}
      title="Not Found"
      text="You just hit a route that doesn&#39;t exist... the sadness."
      link="/"
      linkTitle="Back to home" />
  </div>
)

export default NotFoundPage
