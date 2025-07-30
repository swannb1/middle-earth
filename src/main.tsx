import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Home from "./Home.tsx";
import Journey from "./Journey.tsx";
import Characters from "./Characters.tsx";
import Locations from "./Locations.tsx";
import Experience from "./Experience.tsx";
import Beyond from "./Beyond.tsx";
import ScrollToTop from "./components/navigation/ScrollToTop.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/beyond" element={<Beyond />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
