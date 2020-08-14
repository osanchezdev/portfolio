import styled from "styled-components"
import { darken } from "polished"

export const SidebarWrapper = styled.aside`
  position: relative;
  height: 100vh;
  background: ${({ theme }) => theme.neutral_secondary};
  text-align: center;
  /* box-shadow: 1px 0px 10px -4px rgba(0, 0, 0, 0.75); */
  color: ${({ theme }) => theme.sidebar_text};
`
export const Sidebar = styled.div`
  position: fixed;
  width: 213px;
  padding: 20px;
`

export const SidebarTitle = styled.h3`
  letter-spacing: 1px;
  margin-top: 0;
`

export const LogoWrapper = styled.div``

export const Logo = styled.img`
  border-radius: 15%;
`
export const SidebarDescription = styled.p`
  font-size: 12px;
  line-height: 20px;
  font-weight: 300;
`
export const SidebarProfileLinks = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.sidebar_text};
  padding: 10px;
`
export const ProfileItem = styled.span`
  & a > svg {
    fill: ${({ theme }) => theme.sidebar_text} !important;
    height: 25px;
    width: 25px;
  }
`

export const Navbar = styled.nav``

export const NavbarList = styled.ul`
  list-style: none;
  margin-bottom: 30px;
  padding-left: 50px;
`

export const NavbarItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 40px;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => darken(0.8, theme.sidebar_text)};
  }
  & span {
    font-size: 18px;
  }
  & svg {
    margin-right: 10px;
  }
`
