import React from "react"
import Layout from "../components/layout.js"
import { useStaticQuery, graphql, Link } from "gatsby"
import Head from "../components/head"
import styles from "./website.module.scss"

const WebsitePage = () => {

  return (
    <Layout>
      <Head title="Websites" />
      <h1>Websites</h1>
    </Layout>
  )
}

export default WebsitePage
