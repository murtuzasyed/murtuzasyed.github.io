import React from "react"
import clasnames from "classnames"
import Footer from "../footer";
import "./index.scss";
const activeClasses = (defaultClasses, navigationOut) =>
  clasnames(...defaultClasses, {
    "navigation-out": navigationOut,
  })
export default ({ navigationOut, children, sectionTitle }) => {
  return (
    <div id="main" className={activeClasses(["main"], navigationOut)}>
      <div className="main-body">
        {sectionTitle ? <h1 className="page-header">{sectionTitle}</h1> : null}
        {children}
      </div>
      <Footer />
    </div>
  )
}
