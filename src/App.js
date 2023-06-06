import Router from "./routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const THEME = createTheme({
  typography: {
    fontFamily: ``,
    letterSpacing: "",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={THEME}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
