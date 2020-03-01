// import React from "react"
// import Layout from "../../components/Layout"
// import ExperienceSection from "../../components/ExperienceSection"
// import { useStaticQuery, graphql } from "gatsby"

// export default ({ data }) => {
//   const experiences = data.markdownRemark
//   return (
//     <Layout sectionTitle="Experience">
//       <h1>Experience</h1>
//       {data.allMarkdownRemark.edges.map(({ node }) => (
//         <section id="experience" key={node.id} className="experience-container">
//           <ExperienceSection
//             // companyLogo={`${node.frontmatter.previewImage.childImageSharp.responsiveSizes.src}`}
//             companyName={node.frontmatter.companyName}
//             role={node.frontmatter.companyName}
//           />
//         </section>
//       ))}
//     </Layout>
//   )
// }

// export const query = graphql`
//   query ExperienceQuery {
//     allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "/companies/" } }
//       sort: { fields: [frontmatter___priority], order: DESC }
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             priority
//             companyName
//             start
//             end
//             role
//             path
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `

// // import React from "react"
// // import { graphql } from "gatsby"

// // const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

// // export const query = graphql`
// //   {
// //     allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/companies/"}, html: {}}, sort: {fields: [frontmatter___priority], order: DESC}) {
// //       edges {
// //         node {
// //           id
// //           html
// //           frontmatter {
// //             priority
// //             companyName
// //             start
// //             end
// //             role
// //             path
// //           }
// //           excerpt
// //         }
// //       }
// //     }
// //   }
// // `
