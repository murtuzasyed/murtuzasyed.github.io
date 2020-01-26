import React from "react"
import Layout from "../components/Layout"
import ExperienceSection from "../components/ExperienceSection"
import { useStaticQuery, graphql } from "gatsby"


export default () => {
  const cernerlogo = useStaticQuery(graphql`
  query MyQuery {
    file(relativePath: {eq: "cerner.jpg"}, relativeDirectory: {}) {
      id
      childImageSharp {
        fluid(sizes: "") {
          aspectRatio
          base64
          sizes
          srcSet
        }
      }
    }
  }
  `)
  return (
    <Layout sectionTitle="Experience">
      <section id="experience" className="container">
        <h1>Experience</h1>
        <ExperienceSection
          logo={cernerlogo}
          companyName="Cerner Corporation"
          role="Senior Software Engineer"
        />
      </section>
    </Layout>
  )
}
