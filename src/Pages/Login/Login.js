import React from 'react'
import { loginWithGoogle } from '../../FirebaseFunctions/auth'
import { useStyles } from '../styles'
const Login = () => {
  const classes = useStyles()
  return (
    <div className={classes.loginWrapper}>
      <button onClick={loginWithGoogle}>Log in With Google SON</button>
    </div>
  )
}

export { Login }
