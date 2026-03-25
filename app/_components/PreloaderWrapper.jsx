"use client";
import { useState } from "react";
import Preloader from "./Preloader";

function PreloaderWrapper({ children }) {
  const [show, setShow] = useState(true);

  return (
    <>
      {/* Site is ALWAYS rendered and visible underneath */}
      {children}

      {/* Preloader overlays on top, then unmounts when done */}
      {show && <Preloader onComplete={() => setShow(false)} />}
    </>
  );
}

export default PreloaderWrapper;
