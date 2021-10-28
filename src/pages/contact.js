import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/reusable/HeroSection"
import InfoBlock from "../components/reusable/InfoBlock"
import Contact from "../components/contact/Contact"

const ContactPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
      img={data.fileName.childImageSharp.fluid}
      title="Contact Us"
      subtitle=""
      heroclass="about-background"
    />

    <InfoBlock heading="How Can we Help" />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    fileName: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
