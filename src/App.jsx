import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import About from "./components/about";
import Tools from "./components/tools";
import Contact from "./components/contact";
import Footer from "./components/footer";

import PrivacyPolicy from "./pages/privacyPolicy";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects />
              <About />
              <Tools />
              <Contact />
            </>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
