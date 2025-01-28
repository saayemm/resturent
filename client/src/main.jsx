
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app";

const root = document.getElementById("root");
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(root).render(
  <BrowserRouter>
     <HelmetProvider>
        <App />
    </HelmetProvider>
  </BrowserRouter>
);
