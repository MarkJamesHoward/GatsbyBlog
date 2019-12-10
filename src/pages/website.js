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
      <div className={styles.container}>
        <div className={styles.LittleHeroes}>
          <h3>An application for rewarding kids on good behaviour</h3>
          <img width="200px" alt="" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.links}
            href="https://littleheroes.online"
          >
            <>LittleHeroes</>
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
        <div className={styles.SmudgeTheBeagle}>
          <h3>Smudge The Beagle</h3>
          <a
            className={styles.links}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.smudgethebeagle.com/"
          >
            Smudge The Beagle
          </a>
        </div>
        <div className={styles.Other}>
          <h3>Coming Soon!</h3>
          <a
            className={styles.links}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UC0HsZmiuGCRpKUHR_owGuxA"
          >
            Other
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default WebsitePage
