import { makeStyles } from '@material-ui/core/styles'
import smallLogo from './smallLogo.png'
import fullLogo from './fullLogo.png'

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  Body: {
    height: '100vh',
    position: 'relative',
    background: '#f9f9f9',
    padding: '0px 30px 0px 100px',
  },
  routerWrapper: {
    background: 'white',
    zIndex: '99',
    top: '0px',
    position: 'absolute',
    width: '80px',
    height: '100%',
    boxShadow:
      '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
    '&:hover': {
      width: '250px',
    },
    transition: 'width 0.05s linear',
  },
  selected: {
    background: '#1B9773',
    color: 'white !important',

    '&:hover': {
      background: '#1B9773 !important',
    },
  },
  sideMenuWrapper: {
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Raleway',
    height: '100%',

    '& a div span': {
      display: 'none',
    },

    '&:hover': {
      width: '250px',
      '& a div span': {
        display: 'block',
      },
      '& section': {
        backgroundImage: `url(${fullLogo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '132px',
        marginLeft: '5px',
      },
    },
  },

  link: {
    textDecoration: 'none',
    cursor: 'pointer',
    padding: '20px 28px',
    color: '#1B9773',
    textAlign: 'left',

    '& div': {
      display: 'flex',
      alignItems: 'center',
      '& span': {
        marginLeft: '5px',
        visibility: 'visible',
      },
    },
    '&:hover': {
      background: '#eff7f5',
      color: '#1B9773',
    },
  },

  logout: {
    textDecoration: 'none',
    cursor: 'pointer',
    padding: '20px 28px',
    color: '#1B9773',
    textAlign: 'left',
    position: 'absolute',
    bottom: '0',
    background: '#eff7f5',
    width: '-webkit-fill-available',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '&:hover': {
      background: '#1B9773',
      color: 'white',
    },

    '& div': {
      display: 'flex',
      alignItems: 'center',
      '& span': {
        marginRight: '5px',
      },
    },
  },

  appLogo: {
    height: '75px',
    width: '130px',
    marginBottom: '20px',
    cursor: 'pointer',
    marginTop: '20px',
    backgroundImage: `url(${smallLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '75px',
    top: '0',
  },
}))
