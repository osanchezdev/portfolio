import React, { Component } from "react"

// Crear el context
const CurrentThemeContext = React.createContext()
export const CurrentThemeConsumer = CurrentThemeContext.Consumer

export default class CurrentThemeProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeLight: false,
    }

    this.updateCurrentTheme = this.updateCurrentTheme.bind(this)
  }

  updateCurrentTheme(newValue) {
    this.setState({ activeLight: newValue })
  }

  render() {
    return (
      <CurrentThemeContext.Provider
        value={{
          isActiveLightTheme: this.state.activeLight,
          updateCurrentTheme: this.updateCurrentTheme,
        }}
      >
        {this.props.children}
      </CurrentThemeContext.Provider>
    )
  }
}
