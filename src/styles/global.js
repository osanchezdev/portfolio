import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"

export const GlobalStyles = createGlobalStyle`
  ${normalize()};
  body {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.neutral_primary};
    transition: all 200ms ease;
  }
  link {
    color: ${({ theme }) => theme.link};
    transition: color 200ms ease;
  }
`
