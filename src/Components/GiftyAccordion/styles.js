import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
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
}))
