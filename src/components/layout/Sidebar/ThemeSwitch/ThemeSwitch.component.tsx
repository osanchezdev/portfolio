import React from "react"
import { CurrentThemeConsumer } from "../../../../context/CurrentThemeContext"
import Switch from "react-switch"
import { FaSun, FaMoon } from "react-icons/fa"
import { ThemeSwitchWrapper } from "./ThemeSwitch.styles"

const ThemeSwitch: React.FC = () => {
  return (
    <CurrentThemeConsumer>
      {({ isActiveLightTheme, updateCurrentTheme }) => (
        <ThemeSwitchWrapper>
          <FaMoon />
          <Switch
            onChange={value => updateCurrentTheme(value)}
            checked={isActiveLightTheme}
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
      )}
    </CurrentThemeConsumer>
  )
}

export default ThemeSwitch
