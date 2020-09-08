import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  dashWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },

  dashCard: {
    padding: '10px',
    maxWidth: '450px',
    minWidth: '200px',
    borderRadius: '5px',
    background: 'white',
    display: 'flex',
  },

  dashTitle: {
    fontFamily: 'Raleway',
    marginLeft: '10px',
  },

  dashImage: {
    width: '180px',
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
