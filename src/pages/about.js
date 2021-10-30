import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/reusable/HeroSection"
import InfoBlock from "../components/reusable/InfoBlock"
import DualInfoBlock from "../components/reusable/DualInfoBlock"

const AboutPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
      img={data.fileName.childImageSharp.fluid}
      title="About LCo"
      subtitle=""
      heroclass="about-background"
    />
    <DualInfoBlock heading="About This Project" />
    <InfoBlock heading="About Me"/>
  </Layout>
)

export const query = graphql`
  {
    fileName: file(relativePath: {eq: "about.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage