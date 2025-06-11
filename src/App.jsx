import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/home/home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import NotFound from "./layout/notfound";
import About from "./pages/about/about";
import Portfolio from "./pages/portfolio/portfolio";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
