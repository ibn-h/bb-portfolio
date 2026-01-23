import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    <Router className="">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Projects />
              <About />
              <Tools />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
