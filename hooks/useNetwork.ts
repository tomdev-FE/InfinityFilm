import { useState, useEffect } from "react";

export const useNetwork = () => {
  const [isOnline, setNetwork] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () =>
      setNetwork(window.navigator.onLine)
    );
    window.addEventListener("online", () =>
      setNetwork(window.navigator.onLine)
    );
  });
  return isOnline;
};
