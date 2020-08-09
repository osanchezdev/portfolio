import React from "react"
import PropTypes from "prop-types"

import { LayoutWrapper, MainWrapper } from "./Layout.styles"
import Sidebar from "./Sidebar/Sidebar.component"

//Roboto
import "typeface-roboto"

type LayoutProps = {
  children
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <MainWrapper>{children}</MainWrapper>
    </LayoutWrapper>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
