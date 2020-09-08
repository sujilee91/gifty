import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
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
}))
