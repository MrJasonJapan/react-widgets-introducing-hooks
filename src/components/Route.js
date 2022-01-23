import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      // Setup a piece a state solely in charge of helping the Route Component update (re-render) itself.
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    // cleanup function incase we remove our Route Component(s) from the DOM.
    return () => {
      window.removeEventListener("popstate", onlanguagechange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
