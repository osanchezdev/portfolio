import React from "react"
import { ThemeProvider } from "styled-components"
import { Normalize, GlobalStyles } from "../styles/global"
import Layout from "../components/layout/Layout.component"
import SEO from "../components/seo"

import {
  defaultTheme,
  // lightTheme
} from "../styles/themes"
import Home from "../components/Home/Home.component"

const IndexPage = () => {
  const switchTheme = newValue => {
    console.log(newValue)
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout switchTheme={switchTheme}>
        <SEO title="Home" />
        <Normalize />
        <GlobalStyles />
        <Home />
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
