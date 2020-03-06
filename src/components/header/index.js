import React from "react"
import MenuIcon from "@material-ui/icons/Menu"
import NameTitle from "../nametitle";
import "./index.scss";
/**
 * On Menu Click change add a class that will use transition to transform page on X axis 
 */
export default ({ name, title,  menuClickHandler }) => (
  <header id="portfolio-header" className="portfolio-header">
    <div role="button" className="menu" id="menu" onClick={ menuClickHandler }>
      <MenuIcon />
    </div>
    <div className='header-name-title'><NameTitle name= {name} title ={title}/></div>
  </header>
)
