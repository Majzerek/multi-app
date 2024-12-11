import { createTheme } from "@mui/material";
import { blue, grey, purple } from "@mui/material/colors";

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
      nav: true; 
    }
  }
export const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
            light: purple[300],
            dark: purple[900]
        },
        secondary: {
            main: blue[500],
            light: blue[300],
            dark: blue[900]
        }
    },
    typography: {
        h1: {
            fontSize: 60,
            fontWeight: 500
        },
        h2: {
            fontSize: 50
        },
        h3: {
            fontSize: 45
        },
        h4: {
            fontSize: 40
        },
        h5: {
            fontSize: 37
        }
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    alignContent: 'center',
                    backgroundColor: grey[100],

                }
            }
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: "nav" },
                    style: {
                        width: 100,
                        height: 100,
                        backgroundColor: blue[500],
                        transition: 'linear 0.2s',
                        "&:hover":  {
                            backgroundColor: blue[300],
                        }
                    }
                }
            ]
        }
    },

})