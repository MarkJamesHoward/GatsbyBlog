import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Head from "../components/head"

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>Hello</h1>
      <h2> I'm mark a full stack developer living in Wellington, New Zealand</h2>

      <Link to="/contact">Contact</Link>
    </Layout>
  )
}

export default About
