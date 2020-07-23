import React from "react"
import Particles from "react-particles-js"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"
import { Normalize, GlobalStyles } from "../styles/global"
import Layout from "../components/layout/Layout.component"
import Image from "../components/image"
import SEO from "../components/seo"

import { defaultTheme, lightTheme } from "../styles/themes"
const IndexPage = () => (
  <ThemeProvider theme={defaultTheme}>
    <Layout>
      <SEO title="Home" />
      <Normalize />
      <GlobalStyles />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Particles />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
