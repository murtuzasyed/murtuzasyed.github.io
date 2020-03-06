import React from "react"
import Card from "./card"

export default props => {
  return (
    <Card>
      <div className="edu-section">
        <div className="edu-section-header">
          <div className="primary-text">{props.universityName}</div>
          <p>{props.universityLocation}</p>
        </div>
        <div className="edu-section-body">
          <div className="primary-text">{props.degree}</div>
          <p>GPA: {props.gpa}</p>
        </div>
      </div>
    </Card>
  )
}
