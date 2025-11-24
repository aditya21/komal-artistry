import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#FFF7F3",
      paper: "#FFF9F6",
    },
    primary: {
      main: "#D4AF37",
      contrastText: "#1B120C",
    },
    secondary: {
      main: "#B76E79",
    },
    text: {
      primary: "#1B120C",
      secondary: "#5C3F33",
    },
  },
  typography: {
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: {
      fontFamily: "Playfair Display, serif",
    },
    h2: {
      fontFamily: "Playfair Display, serif",
    },
    h3: {
      fontFamily: "Playfair Display, serif",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 18,
  },
});

export default theme;
