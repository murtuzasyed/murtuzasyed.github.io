import React from "react"
import Layout from "./src/components/Layout"
import ExperienceSection from "./src/components/ExperienceSection"
import { useStaticQuery, graphql } from "gatsby"

export default ({data}) => {
  // const images = useStaticQuery(graphql`
  //   query CompanyQuery {
  //     cernerLogo: file(
  //       relativePath: { eq: "cerner.jpg" }
  //       relativeDirectory: {}
  //     ) {
  //       id
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     northwestLogo: file(
  //       relativePath: { eq: "northwest.jpg" }
  //       relativeDirectory: {}
  //     ) {
  //       id
  //       childImageSharp {
  //         fluid{
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <Layout sectionTitle="Experience">
      <section id="experience" className="experience-container">
        <h1>Experience</h1>
        <ExperienceSection
          companyLogo={images.cernerLogo}
          companyName="Cerner Corporation"
          role="Senior Software Engineer"
        />
        <ExperienceSection
          companyLogo={images.northwestLogo}
          companyName="Northwest Missouri State University"
          role="Graduate Assistant"
        />
      </section>
    </Layout>
  )
}
