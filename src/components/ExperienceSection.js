import React from "react"
import Card from "./Card"
import Img from "gatsby-image"


export default props => {
  return (
    <Card>
      <div className="exp-section">
        <div className="exp-section-header">
          <div className="companyLogo"><Img fluid={props.logo.file.childImageSharp.fluid} alt="Avatar" /></div>
          <div className="companyName">{props.companyName}</div>
          <div className="Title">{props.role}</div>
        </div>
      </div>
    </Card>
  )
}
