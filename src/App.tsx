import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

import { CartContextProvider } from "./context/CartContext";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CartContextProvider>
          <GlobalStyles />
          <Router />
        </CartContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
