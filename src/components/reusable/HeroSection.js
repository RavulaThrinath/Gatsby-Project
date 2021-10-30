import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function HeroSection({ title, subtitle  }) {
  return (
    
      <section className="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">{title}</div>
          <div className="text-2">{subtitle}</div>
          <div class="text-3">A Web Developer</div>
        </div>
      </div>
      </section>
  )
}
