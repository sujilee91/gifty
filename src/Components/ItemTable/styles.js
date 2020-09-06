import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  table: {
    fontFamily: 'Raleway',
    borderSpacking: '0px',
    borderCollapse: 'collapse',
    margin: '20px',
  },

  thead: {
    background: '#1b9773',
    color: 'white',
  },

  th: {
    textAlign: 'left',
    padding: '20px',
  },

  tr: {
    '&:hover': {
      background: '#eff7f5',
    },
    borderBottom: '1px solid #f2f2f2',
    borderRight: '1px solid #f2f2f2',
    borderLeft: '1px solid #f2f2f2',
  },

  itemTd: {
    width: '55%',
    padding: '10px 20px',
  },

  td: {
    padding: '10px 20px',
  },

  priceTd: {
    width: '12%',
    padding: '10px 20px',
  },

  descriptionTd: {
    width: '25%',
    padding: '10px 20px',
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
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '460px',
  },

  itemTitle: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '460px',
  },
}))
