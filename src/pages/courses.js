import React from 'react'
import Link from 'gatsby-link'
import Wave from '../components/Wave';
import Hero from '../components/Hero';

const SecondPage = () => (
  <div>
    <Hero
      image={require('../images/wallpaper.jpg')}
      title="Courses"
      text="Complete courses about the best tools and design systems. Prototype and build apps with React and Swift."
      link="#"
      linkTitle="Buy the courses" />
  </div>
)

export default SecondPage
