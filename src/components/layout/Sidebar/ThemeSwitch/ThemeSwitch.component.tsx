import React, { useState } from "react"
import PropTypes from "prop-types"
import Switch from "react-switch"
import { FaSun, FaMoon } from "react-icons/fa"
import { ThemeSwitchWrapper } from "./ThemeSwitch.styles"

type ThemeSwitchProps = {
  switchTheme
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ switchTheme }) => {
  const [checked, setChecked] = useState(false)
  const updateTheme = newValue => {
    setChecked(newValue)
    // Call upper switchTheme from indexPage
    switchTheme(newValue)
  }
  return (
    <ThemeSwitchWrapper>
      <FaMoon />
      <Switch
        onChange={updateTheme}
        checked={checked}
        onColor="#f074ab"
        onHandleColor="#e40066"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
        className="react-switch"
        id="material-switch"
      />
      <FaSun />
    </ThemeSwitchWrapper>
  )
}

ThemeSwitch.propTypes = {
  switchTheme: PropTypes.func.isRequired,
}

export default ThemeSwitch
