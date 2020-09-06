import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#88d498",
      main: "#1a936f",
      dark: "#114b5f",
    },
    secondary: {
      main: "#f3e9d2",
      dark: "#c6dabf",
    },
    error: {
      main: "#ab003c",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

theme.typography.h4 = {
  fontFamily: "Roboto",
  fontSize: "2.125rem",
  fontWeight: "300",
};

export { theme };
