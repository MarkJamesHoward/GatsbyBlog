import React from "react"
import Layout from "../components/layout.js"
import { useStaticQuery, graphql, Link } from "gatsby"
import Head from "../components/head"
import styles from "./website.module.scss"
import Website from '../components/website'

const WebsitePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            slug
            title
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Websites" />
      <h1>Websites</h1>
      <Website/>
    </Layout>
  )
}

export default WebsitePage
