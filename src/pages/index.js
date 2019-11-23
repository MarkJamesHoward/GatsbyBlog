import React from "react"
import Layout from "../components/layout.js"
import Head from "../components/head"
import{Link} from 'gatsby'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello</h1>
      <h2> I'm mark a full stack developer in Wellington</h2>
      <ul>
        <li>
          <h2>
            <Link to="/Blog">Blog</Link>
          </h2>
        </li>
        <li>
          <h2>
            <a href="https://littleheroes.online" >LittleHeroes</a>
          </h2>
        </li>
        <li>
          <h2>
            <a href="https://creditcardwizard.co.nz">CreditCardWizard</a>
          </h2>
        </li>
      </ul>
    </Layout>
  )
}

export default IndexPage
