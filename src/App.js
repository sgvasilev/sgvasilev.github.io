import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/ThemeSwitch/globalStyles";
import { lightTheme, darkTheme } from "./components/ThemeSwitch/Themes";
import "./App.css";

import Nav from "./components/Navbar";
import { useDarkMode } from "./components/ToggleTheme/useDarkMode";
import Sidebar from "./components/Sidebar";
import Intro from "./components/IntroSection";
import Skills from "./components/skills/";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const [isOpen, setOpen] = useState(false);

  const toggleMobileMenu = () => {
    isOpen === false ? setOpen(true) : setOpen(false);
  };
  setTimeout(function () {
    document.body.className = "";
  }, 500);

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Router>
          <Sidebar toggleMobileMenu={toggleMobileMenu} isOpen={isOpen} />
          <Nav
            toggleTheme={themeToggler}
            toggleMobileMenu={toggleMobileMenu}
          ></Nav>
          <Intro />

          <Skills />
          <Contact />
          <Footer />
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
