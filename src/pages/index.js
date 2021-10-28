import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/reusable/HeroSection"
import InfoBlock from "../components/reusable/InfoBlock"
import DualInfoBlock from "../components/reusable/DualInfoBlock"
import CourseCart from "../components/cart/CourseCart"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />  
    <HeroSection
      img={data.fileName.childImageSharp.fluid}
      title="I Write code"
      subtitle="LearnCodeOnline.in"
      heroclass="hero-background"
    />
    <InfoBlock heading="About Us" />
    <CourseCart courses={data.courses} />
    <DualInfoBlock heading="Our Team" />
  </Layout>
)

export const query = graphql`
  {
    fileName: file(relativePath: { eq: "heromai.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    courses: allContentfulCourses {
      edges {
        node {
          id
          title
          pricing
          category
          description {
            description
          }
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
