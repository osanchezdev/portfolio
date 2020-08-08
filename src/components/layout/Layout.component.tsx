import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../header"

import { LayoutWrapper, MainWrapper } from "./Layout.styles"
import Sidebar from "./Sidebar/Sidebar.component"

type LayoutProps = {
  children
  site: {
    buildTime: string
  }
}
const Layout: React.FC<LayoutProps> = ({ site, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutWrapper>
      <Sidebar />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <MainWrapper>{children}</MainWrapper>
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div> */}
    </LayoutWrapper>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
