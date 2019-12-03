import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
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
    <div className={Styles.header}>
      <Link className={Styles.title} to="/">
        <h1>{data.site.siteMetadata.title}</h1>
      </Link>

      <nav className={Styles.nav}>
        <ul className={Styles.navList}>
          {/* <li className={Styles.navItem}>
            <Link className={Styles.link} to="/">
              Home
            </Link>
          </li> */}
          {/* <li className={Styles.navItem}>
            <Link className={Styles.link} to="/about">
              About
            </Link>
          </li> */}

          <li className={Styles.navItem}>
            <Link className={Styles.link} to="/website">
              Websites
            </Link>
          </li>
          <li className={Styles.navItem}>
            <Link className={Styles.link} to="/blog">
              Blog
            </Link>
          </li>
          <li className={Styles.navItem}>
            <Link className={Styles.link} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
