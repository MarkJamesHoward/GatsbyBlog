import React from "react"
import Layout from "../components/layout.js"
import { useStaticQuery, graphql, Link } from "gatsby"
import Head from "../components/head"
import styles from "./website.module.scss"

const Website = () => {
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
    <div className={styles.container}>
      <div className={styles.LittleHeroes}>
        <h3>An application for rewarding kids on good behaviour</h3>
        <img src={LittleHeroesImg} width="200px" alt="" />
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://littleheroes.online"
        >
          <h2>LittleHeroes</h2>
        </a>
      </div>
      <div className={styles.CreditCardWizard}>
        <h3>Comparison of credit cards in New Zealand</h3>
        <a
          className={styles.links}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.creditcardwizard.co.nz"
        >
          Credit card wizard
        </a>
      </div>
      <div className={styles.AShotOfCode}>
        <h3>YouTube channel - Tutorials on web development</h3>
        <a
          className={styles.links}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UC0HsZmiuGCRpKUHR_owGuxA"
        >
          A shot of code Youtube channel
        </a>
      </div>
    </div>
  )
}

export default Website
