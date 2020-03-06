import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Card from "../card"
import "./index.scss";
export default () => {
  const data = useStaticQuery(graphql`
    query AvatarQuery {
        fileName: file(relativePath: { eq: "images/MyAvatar.jpg" }) {
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
        <Img fluid={data.fileName.childImageSharp.fluid} alt="Avatar" />
      </Card>
    </div>
  )
}
