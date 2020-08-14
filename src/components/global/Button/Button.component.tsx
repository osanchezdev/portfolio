import React from "react"
import PropTypes from "prop-types"

import { ButtonWrapper } from "./Button.styles"

type ButtonProps = {
  variant
}

const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  return <ButtonWrapper variant={variant}>{children}</ButtonWrapper>
}

Button.propTypes = {
  variant: PropTypes.string,
}

export default Button
