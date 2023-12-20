import { createTheme } from "@mui/material";

const WoodenTheme = createTheme({
  typography: {
    fontFamily: {
      main: "Tahoma, sans-serif",
      alternate: "Roboto', sans-serif",
      tertiary: "Playfair Display', serif",
    },
    fontSizes: {
      xxSmall: 8,
      xSmall: 10,
      small: 12,
      medium: 14,
      large: 18,
      xLarge: 22,
      xxLarge: 28
    },
    fontWeight: {
      thin: 100,
      extraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    fontStyle: {
      normal: 'normal',
      italic: 'italic',
      bold: 'bold',
      underline: 'underline'
    },
  },
  palette: {
    primary: {
        main: '#046241',
        alternate: '#0A9F6A'
    },
    secondary: {
        main: '#535654',
        alternate: '#BFC5C1',
        tertiary: '#E9EDEA'
    },
    common: {
        black: '#000000',
        white: '#FFFFFF',
        gray: '#808080'
    }
  },
});

export default WoodenTheme;

  