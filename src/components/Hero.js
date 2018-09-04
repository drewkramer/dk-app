import React from 'react'
import Link from 'gatsby-link'

const Hero = props => (
    <div className="Hero">
        <img src={props.image} />
        <div className="HeroGroup">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <Link to={props.link}>{props.linkTitle}</Link>
        </div>
    </div>
)

export default Hero