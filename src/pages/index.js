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
        <a
          className={styles.youtube}
          target="_blank"
          href="https://www.youtube.com/channel/UC0HsZmiuGCRpKUHR_owGuxA"
        >
          <Card
            title="A Shot of Code"
            footer="YouTube"
            image="YouTube.png"
          ></Card>
        </a>
        <a
          target="_blank"
          className={styles.smudge}
          href="https://www.youtube.com/channel/UCaXo-V4saqKWjgkt4vIU9SA"
        >
          <Card
            image="YouTube.png"
            title="Smudge the Beagle"
            footer="YouTube"
          ></Card>
        </a>
      </div>
    </Layout>
  )
}

export default IndexPage
