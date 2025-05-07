import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router";
import { IntlProvider } from "react-intl";
import messages from '@locales/en.json'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <IntlProvider locale="en" messages={messages}>
        <App />
      </IntlProvider>
    </BrowserRouter>
  </StrictMode>
);
