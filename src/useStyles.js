import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  Body: {
    height: '100vh',
    position: 'relative',
    background: '#f9f9f9',
  },
  bodyWrapper: {
    margin: 'auto',
    maxWidth: '1300px',
    paddingTop: '30px',
    marginLeft: '300px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  span: {
    marginLeft: theme.typography.pxToRem(20),
  },
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
  listHeader: {
    padding: theme.typography.pxToRem(15),
    borderBottom: `1px solid #e0e0e0`,
  },
  listFooter: {
    position: 'sticky',
    bottom: 0,
  },
  listFooterButton: {
    width: '100%',
    borderRadius: '0 !important',
    padding: theme.typography.pxToRem(15),
    height: '50px',
  },
  listBody: {
    height: 'calc( 100vh - 109px) ',
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
  groupTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
  },
  card: {
    margin: '20px',
  },
  accordion: {
    margin: '0 !important',
  },
  accordionDetails: {
    padding: '0 !important',
  },
  listItem: {
    paddingLeft: '30px !important',
    paddingTop: '0 !important',
    paddingBottom: '0 !important',
  },
  itemAvatar: {
    height: '35px !important',
    width: '35px !important',
  },
  itemInfoTitle: {
    padding: '0 0 15px 15px',
    display: 'flex',
    alignItems: 'center;',
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
  title: {
    fontFamily: 'Roboto',
  },
  pageTitle: {
    margin: '20px',
    textAlign: 'left',
  },
  userDetailsCard: {
    display: 'flex',
    flex: '1 0 auto',
  },
  userProfileImageWrapper: {
    minWidth: '200px',
    minHeight: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userCard: {
    margin: '20px',
  },
  userCardContent: {
    textAlign: 'left',
    paddingBottom: '16px !important',
  },
  userDetail: {
    marginTop: '10px',
  },
  userAction: {
    marginTop: '15px',
    bottom: 0,
  },
  userProfileImage: {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
  },

  routerWrapper: {
    background: 'white',
    zIndex: '99',
    top: '0px',
    position: 'absolute',
    width: '250px',
    height: '100%',
    boxShadow:
      '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
  },

  sideMenuWrapper: {
    left: '0',
    maxWidth: '250px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    fontFamily: 'Raleway',
  },

  link: {
    textDecoration: 'none',
    cursor: 'pointer',
    padding: '20px 45px',
    color: '#1B9773',
    textAlign: 'left',
  },

  logout: {
    textDecoration: 'none',
    cursor: 'pointer',
    padding: '20px 45px',
    color: '#1B9773',
    textAlign: 'left',
    position: 'absolute',
    bottom: '0',
    background: '#eff7f5',
    width: '-webkit-fill-available',
    display: 'flex',
    justifyContent: 'space-between',
  },

  appLogo: {
    width: '100px',
    margin: 'auto',
    marginBottom: '20px',
    cursor: 'pointer',
  },

  selected: {
    background: '#1B9773',
    color: 'white',
  },
}))
