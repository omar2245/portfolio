import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#673ab7",
      light: "#8561c5",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
    },
  },
});
