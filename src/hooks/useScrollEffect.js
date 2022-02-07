import { useState, useEffect } from "react";

const useScrollEffect = () => {
  const [scrollDirection, setScrollDirection] = useState(false);

  useEffect(() => {
    const threshold = 1000;
    let lastScrollY = window.pageYOffset;
    let isCounting = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        isCounting = false;
        return;
      }
      setScrollDirection(!(scrollY > lastScrollY));
      lastScrollY = scrollY > 0 ? scrollY : 0;
      isCounting = false;
    };

    const onScroll = () => {
      if (!isCounting) {
        window.requestAnimationFrame(updateScrollDir);
        isCounting = true;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDirection]);

  return scrollDirection;
};

export default useScrollEffect;
