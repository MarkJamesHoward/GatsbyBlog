import React from "react"
import Layout from "../components/layout.js"
import Head from "../components/head"
import { Link, useStaticQuery } from "gatsby"
import styles from "./index.module.scss"
import Card from "../components/card"
import "../styles/index.scss"

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
        <Link className={styles.websites} to="/website">
          <Card title="Websites" image="websites.png" t></Card>
        </Link>
        <Link className={styles.blogs} to="/blog">
          <Card title="Blogs" image="Blogs.png"></Card>
        </Link>
        <Link className={styles.youtube} to="/youtube">
          <Card title="a shot of code" image="YouTube.png"></Card>
        </Link>
        <Link className={styles.other1} to="/other">
          <Card title="Other">Other</Card>
        </Link>
      </div>
    </Layout>
  )
}

export default IndexPage
