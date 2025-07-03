import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRoutes } from "./routing/AppRoutes";
import { Provider } from "react-redux";
import store from "./store/index";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </StrictMode>
);
