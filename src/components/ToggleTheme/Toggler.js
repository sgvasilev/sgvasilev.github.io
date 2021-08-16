import React from "react";
import { func, string } from "prop-types";
import { NavChangeTheme } from "./Toggler.elements";
import { FaSun } from "react-icons/fa";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <NavChangeTheme onClick={toggleTheme}>
      <FaSun size={32} style={{ fill: "", background: "inherit" }} />
    </NavChangeTheme>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
