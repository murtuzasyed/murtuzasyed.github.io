import React from "react"
import { Link } from "gatsby"
import NameTitle from "./NameTitle"
import Avatar from "./Avatar"
const activeStyles = {
  background: 'white',
  color: 'black'
}
const ListLink = props => (
  <li>
    <Link activeClassName="selected" to={props.to}>{props.children}</Link>
  </li>
)
export default () => {
  return (
    <section>
      <Avatar />
      <nav>
        <ul>
          <ListLink to="/" activeClassName="active">
            Home
          </ListLink>
          <ListLink to="/experience/">Experience</ListLink>
          <ListLink to="/education/">Education</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </nav>
    </section>
  )
}
