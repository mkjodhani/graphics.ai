import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "@shopify/polaris";
import { BrowserRouter } from "react-router-dom";

import enTranslations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";
import "./css/font.css";
ReactDOM.render(
  <BrowserRouter basename="/">
    <AppProvider i18n={enTranslations}>
      <App />
    </AppProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
