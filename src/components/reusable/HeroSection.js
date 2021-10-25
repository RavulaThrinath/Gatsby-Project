import React from "react"
import BackgroundImage from 'gatsby-background-image'           

export default function HeroSection({img, title, subtitle, heroclass}) {
  return (
      <BackgroundImage
      className={heroclass}
      fluid={img}
      >
          <div>
              <h1 className="text-white text-uppercase text-center display-4">{title}</h1>
              <h4 className="text-warning text-center">{subtitle}</h4>
          </div>

      </BackgroundImage>

  )
}
