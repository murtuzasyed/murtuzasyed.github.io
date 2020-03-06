import React from "react"
import Layout from "../../components/Layout"
import ExperienceSection from "../../components/ExperienceSection"
import { graphql } from "gatsby"
import "./index.scss";

export default ({ data }) => {
  return (
    <Layout sectionTitle="Experience">
      {data.allMarkdownRemark.edges.map(
        ({ node: { id, frontmatter, html } }) => (
          <section id="experience" key={id} className="experience-container main-section">
            <ExperienceSection
              companyName={frontmatter.companyName}
              role={frontmatter.role}
              companyLocation={frontmatter.companyLocation}
              duration={frontmatter.duration}
              html={html}
            />
          </section>
        )
      )}
    </Layout>
  )
}

export const query = graphql`
  query ExperienceQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/companies/" } }
      sort: { fields: [frontmatter___priority], order: DESC }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            priority
            companyName
            companyLocation
            duration
            role
            path
          }
        }
      }
    }
  }
`
