import React from "react"
import { Link } from "gatsby"
import NameTitle from "./NameTitle"
import Avatar from "./Avatar"
const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
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
          <ListLink to="/skills/">Skills</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </nav>
    </section>
  )
}
