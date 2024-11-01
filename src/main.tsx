import "./index.css";

import App from "./App.tsx";
import { RecoilRoot } from "recoil";
import { StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import { createRoot } from "react-dom/client";
import { theme } from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </StrictMode>
);
