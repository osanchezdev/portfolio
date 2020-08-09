import React from "react"
import SEO from "../components/seo"
import { ThemeProvider } from "styled-components"
import { Normalize, GlobalStyles } from "../styles/global"
import Layout from "../components/layout/Layout.component"

import { defaultTheme, lightTheme } from "../styles/themes"
import Home from "../components/Home/Home.component"
import CurrentThemeProvider, {
  CurrentThemeConsumer,
} from "../context/CurrentThemeContext"

const IndexPage = () => {
  return (
    <CurrentThemeProvider>
      <CurrentThemeConsumer>
        {({ isActiveLightTheme }) => (
          <ThemeProvider theme={isActiveLightTheme ? lightTheme : defaultTheme}>
            <Layout>
              <SEO title="Home" />
              <Normalize />
              <GlobalStyles />
              <Home />
            </Layout>
          </ThemeProvider>
        )}
      </CurrentThemeConsumer>
    </CurrentThemeProvider>
  )
}

export default IndexPage
