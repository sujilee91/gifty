import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  itemsWrapper: {
    padding: '0px 20px',
  },

  paper: {
    padding: '10px',
    display: 'flex',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  addButtonWrapper: {
    minWidth: '95%',
    minHeight: '95%',
    border: '2px dashed #1b9773',
    borderRadius: '3px',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      background: '#eff7f5',
    },
  },

  addButton: {
    minWidth: '100%',
    minHeight: '100%',
    cursor: 'pointer',
  },

  itemWrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },

  itemList: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    marginRight: '50px',
  },

  itemImg: {
    margin: '5px 20px',
  },

  image: {
    borderRadius: '5px',
    height: '60px',
    width: '60px',
  },

  itemDescription: {
    display: 'flex',
    fontSize: '15px',
    flexDirection: 'column',
    marginLeft: '15px',
    fontFamily: 'Raleway',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  itemConfig: {
    display: 'flex',
    fontSize: '13px',
    color: '#9b9b9b',
    maxWidth: '460px',
  },

  badge: {
    display: 'inline',
    '& .MuiBadge-badge': {
      height: '40px',
      width: '40px',
      borderRadius: '50%',
    },
  },
}))
