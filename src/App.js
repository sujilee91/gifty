import React from 'react'
import './App.css'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import logo from './gifty.png'
import { Groups } from './Pages/Groups/Groups'
import { User } from './Pages/User/User'

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#88d498',
        main: '#1a936f',
        dark: '#114b5f',
      },
      secondary: {
        main: '#f3e9d2',
        dark: '#c6dabf',
      },
      error: {
        main: '#ab003c',
      },
    },
  })

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <div className="Header">
          <img className="App-logo" src={logo} alt="logo" />
        </div>
        <div className="Body">
          <Groups />
          <User />
        </div>
      </div>
    </MuiThemeProvider>
  )
}

export default App
