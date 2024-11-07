import { createTheme } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    partyBanner: true;
    google: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#e0247d", // Vivid Cerise
      light: "#ff63ac", // Hot Pink
      dark: "#a90051", // Jazzberry Jam
      contrastText: "#ffffff", // White
    },
    secondary: {
      main: "#24e087", //  UFO Green
      light: "#6dffb7", // Aquamarine
      dark: "#00ad59", // Green (Pigment)
      contrastText: "#ffffff", // White
    },
  },
  typography: {
    fontFamily: `'Lato', sans-serif`,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: 60,
          fontWeight: 700,
          textTransform: "capitalize",
        },
        contained: {
          background:
            "transparent linear-gradient(135deg, #F927CB 0%, #FE6B00 100%) 0% 0% no-repeat padding-box",
        },
      },
      variants: [
        {
          props: { variant: "partyBanner" },
          style: {
            color: "#ffffff",
            backgroundColor: "#F34682",
          },
        },
        {
          props: { variant: "google" },
          style: {
            color: "#ffffff",
            backgroundColor: "#4285F4",
            "&:hover": {
              backgroundColor: "#4285F4",
            },
          },
        },
      ],
    },
    MuiInput: {
      styleOverrides: {
        root: {
          borderRadius: 60,
          fontWeight: 700,
          textTransform: "capitalize",
        },
      },
    },
  },
});

export default theme;
