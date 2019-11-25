import React from "react"
import Layout from "../components/layout.js"
import { useStaticQuery, graphql, Link } from "gatsby"
import Head from "../components/head"
import styles from "./website.module.scss"

const BlogPage = () => {
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
      <ul className={styles.websites}>
        <li>
          <h3>An application for rewarding kids on good behaviour</h3>
          <p>
            <a className={styles.links} href="https://littleheroes.online">LittleHeroes</a>
          </p>
        </li>
        <li>
          <h3>
            Comparison of credit cards in New Zealand
          </h3>
          <p>
            <a className={styles.links}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.creditcardwizard.co.nz"
            >
              Credit card wizard
            </a>
          </p>
        </li>
        <li>
          <h3>
            YouTube channel - Tutorials on web development
          </h3>
          <p>
            <a className={styles.links}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UC0HsZmiuGCRpKUHR_owGuxA"
            >
              A shot of code Youtube channel
            </a>
          </p>
        </li>
      </ul>
    </Layout>
  )
}

export default BlogPage
