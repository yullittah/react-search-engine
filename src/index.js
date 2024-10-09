import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import SearchForm from "./search";
import NewForm from "./newnewnew";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <NewForm />
  </StrictMode>
);
