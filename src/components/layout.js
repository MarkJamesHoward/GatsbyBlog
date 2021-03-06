import React from "react"
import Header from "./header.js"
import Footer from "./footer.js"
import "../styles/index.scss"
import layoutStyles from "../components/layout.module.scss"
import "typeface-roboto"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      <div className={layoutStyles.content}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
