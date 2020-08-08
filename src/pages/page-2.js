import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`
const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`
const Excerpt = styled.p`
  margin: 0;
`

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>

    <Description>
      <Username>Ojsm45</Username>
      <Excerpt>
        Kick off your next, great Gatsby project with this default starter. This
        barebones starter ships with the main Gatsby configuration files you
        might need.
      </Excerpt>
    </Description>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
