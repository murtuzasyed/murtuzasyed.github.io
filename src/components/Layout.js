import React, { useState } from "react"
import Header from "./header"
import Navigation from "./navigation"
import Main from "./main"
import classnames from "classnames"

const activeClasses = (defaultClasses, navigationOut) =>
  classnames(...defaultClasses, {
    "navigation-out": navigationOut,
  })

export default props => {
  const [navigationOut, setNavigationOut] = useState(false)
  return (
    <div className={activeClasses(["wrapper"], navigationOut)}>
      <div
        id="navigation"
        className={activeClasses(["navigation"], navigationOut)}
      >
        <Navigation />
      </div>
      <Header
        name="Murtuza Syed"
        title="Full Stack Developer"
        menuClickHandler={() => setNavigationOut(!navigationOut)}
      />
      <Main navigationOut={navigationOut} sectionTitle={props.sectionTitle}>
        {props.children}
      </Main>
    </div>
  )
}
