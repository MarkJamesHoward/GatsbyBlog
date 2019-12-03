import React from "react"
import Layout from "../components/layout.js"
import Head from "../components/head"
import { Link, useStaticQuery } from "gatsby"
import styles from "./index.module.scss"
import Card from "../components/card"

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
          <Card title="Websites" image="websites.png" t></Card>
        </div>
        <div className={styles.blogs}>
          <Card title="Blogs" image="Blogs.png"></Card>
        </div>
        <div className={styles.other1}>
          <Card title="YouTube Channel" image="YouTube.png"></Card>
        </div>
        <div className={styles.other2}>
          <Card title="Other">Other</Card>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
