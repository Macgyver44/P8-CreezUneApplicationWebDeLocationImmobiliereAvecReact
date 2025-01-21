import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.scss";
import AppRouter from "./Router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
