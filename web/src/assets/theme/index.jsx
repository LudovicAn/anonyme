import { createMuiTheme } from "@material-ui/core/styles";

const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#105726",
    },
  },
  typography: {
    fontFamily: "'Nunito', sans-serif",
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        padding: "8px 14px",
      },
    },
    MuiInputBase: {
      root: {
        fontSize: "0.9rem",
      },
    },
    MuiTextField: {
      root: {
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "#fff",
        transition: defaultTheme.transitions.create([
          "border-color",
          "box-shadow",
        ]),
        "&:hover": {
          backgroundColor: "#fff",
        },
        "&$focused": {
          backgroundColor: "#fff",
          /* boxShadow: `${alpha(
            defaultTheme.palette.primary.main,
            0.25
          )} 0 0 0 2px`, */
          borderColor: defaultTheme.palette.primary.main,
        },
      },
    },
    MuiFilledInput: {
      underline: {
        "&:before": {
          borderBottom: "none",
        },
        "&:hover:before": {
          borderBottom: "none",
        },
      },
    },
  },
});

export default theme;
