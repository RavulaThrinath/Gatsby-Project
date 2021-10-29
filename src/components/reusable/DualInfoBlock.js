import React from "react"
import Heading from "./Heading"
import vc from "../../images/Vc.png"

export default function DualInfoBlock({ heading, subtitle }) {
  return (
    <section className="my-4 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="fcc lead mb-5">
              Hey, the main goal behind making this project is to understand
              variety of technologies which i never touched before. The
              technlogy Stack i have used for this project is ReactJs, Gatsby which is an opensource
              framework based on React, graphql, Contentful which is cloud-based solution for content
              infrastructure that lets you create, manage and distribute content
              to any platform,Github for version control and
            Netlify for deploying website.
            </p>
          </div>
          <div className="col-4">
            <div>
              <img src={vc} width="300px" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
