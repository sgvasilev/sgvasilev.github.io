import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family:  Alegreya, Helvetica, Arial, Roboto, sans-serif;
    transition: background 0.30s linear, color 0.30s linear;
  }
  `;
