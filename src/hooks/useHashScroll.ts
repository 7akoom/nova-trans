import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useHashScroll = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  }, [hash]);
};