import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/not_found";
import ProjectDirectory from "./pages/ProjectDirectory";
import Stbot from "./pages/StationBot";
import Quaverfy from "./pages/quaverfy";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <React.StrictMode>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/projects'
          element={<ProjectDirectory />}
        />
        <Route
          path='/projects/stbot'
          element={<Stbot />}
        />
        <Route
          path='/api/v1/quaverfy/:id/:mode'
          element={<Quaverfy />}
        />
        <Route
          path='*'
          element={
            <Navigate
              replace
              to='/'
            />
          }
        />
      </Routes>
      <Footer />
    </React.StrictMode>
  </HashRouter>
);
