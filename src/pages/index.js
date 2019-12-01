import React from "react"
import Layout from "../components/layout.js"
import Head from "../components/head"
import { Link, useStaticQuery } from "gatsby"
import styles from "./index.module.scss"
import blogStyles from "./blog.module.scss"


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

      <h1>Recent Blogs</h1>
      <ol className={blogStyles.posts}>
        {blogData.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
              </Link>
              <p>{edge.node.publishedDate}</p>
            </li>
          )
        })}
      </ol>

      <h1>Websites</h1>
      <ul className={styles.websites}>
        <li>
          <h3>An application for rewarding kids on good behaviour</h3>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.links}
              href="https://littleheroes.online"
            >
              LittleHeroes
            </a>
          </p>
        </li>
        <li>
          <h3>Comparison of credit cards in New Zealand</h3>
          <p>
            <a
              className={styles.links}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.creditcardwizard.co.nz"
            >
              Credit card wizard
            </a>
          </p>
        </li>
        <li>
          <h3>YouTube channel - Tutorials on web development</h3>
          <p>
            <a
              className={styles.links}
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

export default IndexPage
