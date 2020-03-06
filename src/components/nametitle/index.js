import React from "react"
import "./index.scss";
export default props => (
  <div className="name-title">
    <h2>{props.name}</h2>
    <span>{props.title}</span>
  </div>
)
