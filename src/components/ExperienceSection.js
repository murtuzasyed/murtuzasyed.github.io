import React from "react"
import Card from "./card"
export default props => {
  return (
    <Card>
      <div className="exp-section">
        <div className="exp-section-header">
          <h2>{props.companyName}</h2>
          <h3>{props.role}</h3>
          <h4>
            {props.duration}
          </h4>
          <h4>{props.companyLocation}</h4>
        </div>
        <hr />
        <div
          className="exp-section-body light-border"
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
      </div>
    </Card>
  )
}
