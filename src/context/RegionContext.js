"use client";

import { createContext, useState, useContext, useEffect } from "react";

const RegionContext = createContext();

export function RegionProvider({ children }) {
  const [region, setRegion] = useState("NG");

  useEffect(() => {
    const saved = localStorage.getItem("vp_region");
    if (saved && (saved === "NG" || saved === "UK")) {
      setRegion(saved);
    }
  }, []);

  const changeRegion = (newRegion) => {
    setRegion(newRegion);
    localStorage.setItem("vp_region", newRegion);
  };

  return (
    <RegionContext.Provider value={{ region, changeRegion }}>
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  return useContext(RegionContext);
}
