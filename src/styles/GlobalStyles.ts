import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  p {
    font-family: "Roboto", sans-serif;
    line-height: 130%;
  }

  h1, h2, h3 {
    font-family: "Baloo 2", sans-serif;
    line-height: 130%;
  }

`
