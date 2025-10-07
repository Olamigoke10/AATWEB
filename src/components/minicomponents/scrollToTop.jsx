import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // optional: makes it scroll smoothly
    });
  }, [pathname]);

  return null; // nothing to render
};

export default ScrollToTop;
