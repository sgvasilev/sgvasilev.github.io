import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/ThemeSwitch/globalStyles";
import { lightTheme, darkTheme } from "./components/ThemeSwitch/Themes";
import "./app.css";

import Nav from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("Theme"));
  const themeToggler = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("Theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("Theme", "light");
    }
  };

  useEffect(() => {}, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Router>
          <Nav />
          <button onClick={themeToggler}>Switch Theme</button>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
