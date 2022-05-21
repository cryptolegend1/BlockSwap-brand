import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "rgb(16,185,129)",
    },
    secondary: {
      main: "rgba(255, 255, 255, 0.45)",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h3: {
          fontFamily: "Lcd-Solid,Arial,sans-serif",
          color: "rgb(16,185,129)",
          textAlign: "center",
        },
        h5: {
          fontFamily: "Lcd-Solid,Arial,sans-serif",
          color: "rgb(16,185,129)",
          textAlign: "center",
        },
        body2: {
          fontSize: "16px",
          fontWeight: 600,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "18px",
          textTransform: "none",
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        ul: {
          justifyContent: "center",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto,Helvetica,Arial,sans-serif",
        },
      },
    },
  },
});

export default theme;
