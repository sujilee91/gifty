import React, { useEffect } from 'react'
import './App.css'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Menu } from './Components/Menu'
import { authListener, loginWithGoogle } from './FirebaseFunctions/auth'

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
    typography: {
      fontFamily: 'Raleway',
    },
  })

  theme.typography.h4 = {
    fontFamily: 'Roboto',
    fontSize: '2.125rem',
    fontWeight: '300',
  }

  useEffect(() => {
    authListener()
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <Menu />
      <div className="App" />
      <button onClick={loginWithGoogle}>LOG IN WITH GOOGLE</button>
    </MuiThemeProvider>
  )
}

export default App
