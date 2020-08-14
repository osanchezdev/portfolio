import styled from "styled-components"
import { darken, complement, timingFunctions } from "polished"
import { BTN_PRIMARY, BTN_SECONDARY, BTN_TERTIARY } from "../../../constants"

const getButtonColors = (theme, variant) => {
  switch (variant) {
    case BTN_TERTIARY:
      return theme.tertiary
    case BTN_SECONDARY:
      return theme.secondary
    case BTN_PRIMARY:
    default:
      return theme.primary
  }
}

export const ButtonWrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: 10px;
  min-width: 100px;
  border-radius: 5px;
  color: #fff;
  transition-property: background-color;
  transition-duration: 300ms;
  transition-timing-function: ${timingFunctions("easeInCubic")};
  background-color: ${({ theme, variant }) => getButtonColors(theme, variant)};
  &:hover {
    background-color: ${({ theme, variant }) =>
      complement(getButtonColors(theme, variant))};
  }
`
