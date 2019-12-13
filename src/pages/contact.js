import React from "react"
import Layout from "../components/layout.js"
import Head from "../components/head"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        Want to contact me? Send me a DM on &nbsp;
        <a target="_" href="https://twitter.com/bigusbirdicus">
          Twitter
        </a>
      </p>
    </Layout>
  )
}

export default Contact
