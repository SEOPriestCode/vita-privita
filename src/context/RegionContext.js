"use client";

import { createContext, useState, useContext, useEffect } from "react";
import * as ngContent from "@/data/ng/content";
import * as ukContent from "@/data/uk/content";

const RegionContext = createContext();

const contentMap = {
  NG: ngContent,
  UK: ukContent,
};

export function RegionProvider({ children }) {
  const [region, setRegion] = useState("NG");
  const [content, setContent] = useState(ngContent);

  useEffect(() => {
    const saved = localStorage.getItem("vp_region");
    if (saved && (saved === "NG" || saved === "UK")) {
      setRegion(saved);
      setContent(contentMap[saved]);
    }
  }, []);

  const changeRegion = (newRegion) => {
    setRegion(newRegion);
    setContent(contentMap[newRegion]);
    localStorage.setItem("vp_region", newRegion);
  };

  return (
    <RegionContext.Provider value={{ region, changeRegion, ...content }}>
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  return useContext(RegionContext);
}
