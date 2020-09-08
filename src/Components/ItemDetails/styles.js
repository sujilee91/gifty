import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  list: {
    width: 300,
    fontFamily: 'Raleway',
  },
  listHeader: {
    padding: theme.typography.pxToRem(15),
    borderBottom: `1px solid #e0e0e0`,
    '& h3': {
      margin: '5px 0',
    },
  },
  listFooter: {
    position: 'sticky',
    bottom: 0,
    width: '100%',
  },
  listFooterButton: {
    width: '100%',
    borderRadius: '0 !important',
    padding: theme.typography.pxToRem(15),
    height: '50px',
  },
  listBody: {
    minHeight: 'calc( 100vh - 113px)',
  },
  itemImageWrapper: {
    padding: '15px',
    borderRadius: '3px',
  },
  itemImage: {
    width: '100%',
    maxHeight: '270px',
    borderRadius: '3px',
  },
  squareAvatar: {
    minHeight: '270px',
    width: '100% !important',
    borderRadius: '3px !important',
  },
  itemInfoTitle: {
    padding: '0 0 15px 15px',
    display: 'flex',
    alignItems: 'center',
    '& h6': {
      fontSize: '18px',
    },
  },
  linkIcon: {
    marginLeft: '15px',
  },
  itemInfoBody: {},
  itemParam: {
    padding: '10px',
    borderTop: 'solid 1px #e7ecf4',
    display: 'flex',
    flexDirection: 'column',
    '&:last-child': {
      borderBottom: 'solid 1px #e7ecf4',
    },
  },
  twoColumn: {
    display: 'flex',
    borderBottom: 'solid 1px #e7ecf4',
  },
  extraItemParam: {
    padding: '10px',
    borderTop: 'solid 1px #e7ecf4',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '&:last-child': {
      borderLeft: 'solid 1px #e7ecf4',
    },
  },
}))
