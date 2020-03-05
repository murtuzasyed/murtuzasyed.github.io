import React, { useState } from "react"
import Header from "./Header"
import Navigation from "./Navigation"
import Main from "./Main"
import classnames from "classnames"

const activeClasses = (defaultClasses, slidePanelOut) =>
  classnames(...defaultClasses, {
    "slide-panel-out": slidePanelOut,
  })

export default props => {
  const [slidePanelOut, setSlidePanelOut] = useState(false)
  return (
    <div className={activeClasses(["wrapper", "background"], slidePanelOut)}>
      <div
        id="navigation"
        className={activeClasses(["navigation"], slidePanelOut)}
      >
        <Navigation />
      </div>
      <Header
        name="Murtuza Syed"
        title="Full Stack Developer"
        menuClickHandler={() => setSlidePanelOut(!slidePanelOut)}
      />
      <Main slidePanelOut={slidePanelOut} sectionTitle={props.sectionTitle}>
        {props.children}
      </Main>
    </div>
  )
}
