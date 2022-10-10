import "./App.scss";

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";

const Header = lazy(() => import("../header/Header"));
const Home = lazy(() => import("../home/Home"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const Resume = lazy(() => import("../resume/Resume"));
const Portfolio = lazy(() => import("../portfolio/Portfolio"));
const Contact = lazy(() => import("../contact/Contact"));

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
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="*" element={<Page404 />} /> */}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
