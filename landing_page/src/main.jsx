import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    green: "#31C48D",
    darkGreen: "#1a6649",
    dark: "#061912",
  },
};

const components = {
  Text: {
    baseStyle: {
      color: "#061912",
    },
  },
};

const theme = extendTheme({ colors, components });

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
