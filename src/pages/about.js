import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Head from '../components/head'

const About = () => {
  return (
    <Layout>
      <Head title="About"/>
      <h1>About</h1>
      <p>This is the about page</p>
      <Link to="/contact">Contact</Link>
    </Layout>
  )
}

export default About
