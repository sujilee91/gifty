import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  groupTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
  },
  pageTitle: {
    padding: '20px',
    textAlign: 'left',
  },
  title: {
    fontFamily: 'Roboto',
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
    marginTop: '0px',
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
}))
