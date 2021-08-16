import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/ThemeSwitch/globalStyles";
import { lightTheme, darkTheme } from "./components/ThemeSwitch/Themes";
import "./App.css";

import ParticlesDraw from "./components/Particles/particles";
import Nav from "./components/Navbar";
import { useDarkMode } from "./components/ToggleTheme/useDarkMode";
import Sidebar from "./components/Sidebar";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Router>
          <Sidebar />
          <Nav toggleTheme={themeToggler}></Nav>

          <ParticlesDraw />
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
