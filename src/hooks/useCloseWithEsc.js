import { useEffect } from "react";

export default function useCloseWithEsc(contentIsOpen, action) {
  useEffect(() => {
    function closeOnEsc(e) {
      if (e.key === "Escape" || e.key === 27) {
        action();
      }
    }

    if (contentIsOpen) {
      document.addEventListener("keydown", closeOnEsc);
    }

    return () => {
      document.removeEventListener("keydown", closeOnEsc);
    };
  }, [contentIsOpen, action]);
}
