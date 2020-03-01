import React from "react"
import Card from "./Card"
import Img from "gatsby-image"

export default props => {
  return (
    <Card>
      <div className="exp-section">
        <div className="exp-section-header">
          {/* <div className="company-logo"><img src={props.companyLogo} alt="Avatar" /></div> */}
          <h2 className="companyName">{props.companyName}</h2>
          <h3>{props.role}</h3>
        </div>
        <div className="exp-section-body">
          <div className="exp-section-responsibilties">
          </div>
          <div className="exp-section-projects">
            
          </div>
          <ul>
            <li>Help students</li>
            <li>Help students 1</li>
            <li>Help students 2</li>
            <li>Help students 3</li>
          </ul>
        </div>
        <div className="exp-section-footer">
          <div className="Title">Aug 2012 - Present | Kansas City, MO</div>
        </div>
      </div>
    </Card>
  )
}
