import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Card from "./Card"
export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "MyAvatar.jpg" }, relativeDirectory: {}) {
        id
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            srcSet
          }
        }
      }
      allImageSharp {
        edges {
          node {
            id
          }
        }
      }
    }
  `)
  return (
    <div className="avatar">
      <Card>
        <Img fluid={data.file.childImageSharp.fluid} alt="Avatar" />
      </Card>
    </div>
  )
}
