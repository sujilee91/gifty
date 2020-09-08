import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  dashWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },

  card: {
    margin: '20px',
  },

  loginWrapper: {
    height: '100vh',
    with: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
