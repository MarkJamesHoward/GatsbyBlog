import React from "react"
import Layout from "../components/layout.js"
import Head from "../components/head"
import { Link, useStaticQuery } from "gatsby"
import styles from "./index.module.scss"
import blogStyles from "./blog.module.scss"
import Website from "../components/website"

const IndexPage = () => {
  const blogData = useStaticQuery(graphql`
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
      <Head title="Home" />

      <div className={styles.container}>
        <div className={styles.websites}>
          <Link to="./website">Websites</Link>
        </div>
        <div className={styles.blogs}>
          <Link to="./blog">Blog</Link>
        </div>
        <div className={styles.other1}>Other</div>
        <div className={styles.other2}>Other</div>
      </div>
    </Layout>
  )
}

export default IndexPage
