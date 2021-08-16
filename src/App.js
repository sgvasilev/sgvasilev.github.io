import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/ThemeSwitch/globalStyles";
import { lightTheme, darkTheme } from "./components/ThemeSwitch/Themes";
import "./App.css";

import Nav from "./components/Navbar";
import { useDarkMode } from "./components/ToggleTheme/useDarkMode";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Router>
          <Nav toggleTheme={themeToggler}></Nav>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
