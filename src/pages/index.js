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
      title="Shop and Ship"
      subtitle="An E-commerce Website"
      heroclass="hero-background"
    />
    <InfoBlock heading="About Us" />
    <CourseCart courses={data.courses} />
    <DualInfoBlock heading="About This Project" />
  </Layout>
)

export const query = graphql`
  {
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
