import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Head from "../components/head"

const About = () => {
  return (
    <Layout>
      <Head title="About" />


      <Link to="/contact">Contact</Link>
    </Layout>
  )
}

export default About
