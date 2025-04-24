import { useCallback } from "react";

function useScrollTo() {
  const scrollTo = useCallback((targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return scrollTo;
}

export default useScrollTo;
