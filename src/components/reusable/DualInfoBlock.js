import React from "react"
import Heading from "./Heading"

export default function DualInfoBlock({ heading, subtitle }) {
  return (
    <section className="my-4 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-9 mx-auto">
            <p className="fcc lead mb-5">
              Hey, the main goal behind making this project is to understand
              variety of technologies which i never used before. The technlogy
              Stack i have used for this project is <span>ReactJs</span>, <span>Gatsby</span> which is an
              opensource framework based on React, <span>graphql</span>, <span>Contentful</span> which is
              cloud-based solution for content infrastructure that lets you
              create, manage and distribute content to any platform, <span>Github</span> for
              version control and <span>Netlify</span> for deploying the website. That's all About this Project.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
