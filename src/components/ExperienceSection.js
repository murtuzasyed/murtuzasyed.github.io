import React from "react"
import Card from "./Card"
import Img from "gatsby-image"

export default props => {
  return (
    <Card>
      <div className="exp-section">
        <div className="exp-section-header light-border">
          <div className="primary-text">{props.companyName}</div>
          <div className="secondary-text">{props.role}</div>
          <div className="secondary-text">
            {props.duration}
          </div>
          <div>{props.companyLocation}</div>
        </div>
        <div
          className="exp-section-body light-border"
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
      </div>
    </Card>
  )
}
