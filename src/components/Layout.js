import React, { useState } from "react"
import Header from "./Header"
import Navigation from "./Navigation"
import Main from "./Main"
import classnames from "classnames"
import SectionHeader from "./SectionHeader"
// import Avatar from "./Avatar";
import NameTitle from "./NameTitle";
import Footer from "./Footer";
const activeClasses = (defaultClasses, slidePanelOut) =>
  classnames(...defaultClasses, {
    "slide-panel-out": slidePanelOut,
  })

export default props => {
  const [slidePanelOut, setSlidePanelOut] = useState(false)
  return (
    <div className={activeClasses(["wrapper"], slidePanelOut)}>
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
      <Main slidePanelOut={slidePanelOut}>
        {props.children}
      </Main>
    </div>
  )
}
