import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  table: {
    width: '100%',
    fontFamily: 'Raleway',
    borderSpacking: '0px',
    borderCollapse: 'collapse',
  },

  thead: {},

  th: {
    textAlign: 'left',
    padding: '20px',
  },

  tr: {
    '&:hover': {
      background: '#eff7f5',
    },
    borderBottom: '1px solid #f2f2f2',
  },

  itemTd: {
    width: '55%',
    padding: '20px',
  },

  tbody: {
    background: 'white',
  },
  itemWrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },

  itemImg: {
    marginRight: '5px 20px',
  },

  image: {
    borderRadius: '5px',
  },

  itemDescription: {
    display: 'flex',
    fontSize: '15px',
    flexDirection: 'column',
    marginLeft: '15px',
  },
  itemConfig: {
    display: 'flex',
    fontSize: '13px',
    color: '#9b9b9b',
  },
}))
