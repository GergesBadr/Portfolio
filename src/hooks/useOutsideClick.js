import { useEffect } from "react";

function useOutsideClick(elementRef, action) {
  useEffect(() => {
    function detectOutsideClick(e) {
      // If provided element ref exist, AND it's NOT the clicked element, do what you want
      if (elementRef.current && !elementRef.current.contains(e.target)) {
        action && action();
      }
    }

    document.addEventListener("click", detectOutsideClick, true);

    return () =>
      document.removeEventListener("click", detectOutsideClick, true);
  }, [elementRef, action]);
}

export default useOutsideClick;
