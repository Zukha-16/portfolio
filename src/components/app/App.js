import "./App.scss";

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RingLoader from "react-spinners/RingLoader";

const Header = lazy(() => import("../header/Header"));
const Home = lazy(() => import("../home/Home"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ResumePage = lazy(() => import("../pages/ResumePage"));
const PortfolioPage = lazy(() => import("../pages/PortfolioPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Suspense
          fallback={
            <RingLoader
              color="rgb(228, 48, 63"
              cssOverride={{
                position: "fixed",
                transform: "translate(75vh, 50vh)",
              }}
            />
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="test" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
