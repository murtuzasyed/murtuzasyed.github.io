import React from "react"
import clasnames from "classnames"
import Footer from "./Footer"
const activeClasses = (defaultClasses, slidePanelOut) =>
  clasnames(...defaultClasses, {
    "slide-panel-out": slidePanelOut,
  })
export default ({ slidePanelOut, children }) => {
  return (
    <div id="main" className={activeClasses(["main"], slidePanelOut)}>
      {children}
      <Footer />
    </div>
  )
}
