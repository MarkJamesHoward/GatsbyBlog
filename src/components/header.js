import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Styles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)
  return (
    <div>
      <h1>
        <Link className={Styles.header} to="/">{data.site.siteMetadata.title}</Link>
      </h1>
      <nav className={Styles.header}>
        <ul className={Styles.navList}>
          <li className={Styles.navItem}>
            <Link className={Styles.link} to="/">
              Home
            </Link>
          </li>
          <li className={Styles.navItem}>
            <Link className={Styles.link} to="/about">
              About
            </Link>
          </li>
          <li className={Styles.navItem}>
            <Link className={Styles.link} to="/contact">
              Contact
            </Link>
          </li>
          <li className={Styles.navItem}>
            <Link className={Styles.link} to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
