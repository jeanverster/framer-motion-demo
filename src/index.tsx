import { CSSReset, theme as chakraTheme, ThemeProvider } from "@chakra-ui/core";
import { css, Global } from "@emotion/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const theme = {
  ...chakraTheme,
  fonts: {
    body: "Abril Fatface, sans-serif",
    heading: "Abril Fatface, sans-serif",
    mono: "Abril Fatface, sans-serif",
  },
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Global
      styles={css`
        h1,
        h2,
        h3,
        h4 {
          font-family: Alfa Slab One, sans-serif;
        }
        span,
        p,
        button {
          font-family: Open Sans, sans-serif;
        }
      `}
    />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
