import React from "react"
import clasnames from "classnames"
import Footer from "./Footer"
const activeClasses = (defaultClasses, slidePanelOut) =>
  clasnames(...defaultClasses, {
    "slide-panel-out": slidePanelOut,
  })
export default ({ slidePanelOut, children, sectionTitle }) => {
  return (
    <div id="main" className={activeClasses(["main"], slidePanelOut)}>
      <div className="main-body">
        {sectionTitle ? <h1>{sectionTitle}</h1> : null}
        {children}
      </div>
      <Footer />
    </div>
  )
}
