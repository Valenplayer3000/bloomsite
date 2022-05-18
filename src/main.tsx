import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/not_found"
import ProjectDirectory from "./pages/ProjectDirectory"
import "./index.css"
import Stbot from "./pages/StationBot"
import Footer from "./components/footer"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/projects" element={<ProjectDirectory />} />
        <Route path="/projects/stbot" element={<Stbot />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
)
