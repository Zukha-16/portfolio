import "./App.scss";

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import RingLoader from "react-spinners/RingLoader";

const Header = lazy(() => import("../header/Header"));
const Home = lazy(() => import("../home/Home"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ResumePage = lazy(() => import("../pages/ResumePage"));
const PortfolioPage = lazy(() => import("../pages/PortfolioPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

function App() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  return (
    <Router>
      <Header burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
      <div className="container">
        <Suspense
          fallback={
            <div className="ring_loader">
              <RingLoader color={"rgb(70, 156, 107)"} />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
