import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useHashScroll = () => {
  const location = useLocation();

  useEffect(() => {
    // We splitsen de hash op. Bij HashRouter is de URL vaak #/#section
    const segments = location.hash.split("#");
    const lastHash = segments[segments.length - 1];

    if (lastHash && lastHash !== "/") {
      // Gebruik een kleine timeout om te zorgen dat de DOM geladen is
      const scrollTimeout = setTimeout(() => {
        const element = document.getElementById(lastHash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);

      return () => clearTimeout(scrollTimeout);
    }
  }, [location]);
};

export default useHashScroll;
