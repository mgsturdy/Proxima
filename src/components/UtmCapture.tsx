"use client";

import { useEffect } from "react";
import { captureUtmParams } from "@/lib/utm";

/**
 * Captures UTM params into sessionStorage on every page load so they survive
 * navigation to a form page. Renders nothing. See lib/utm.ts.
 */
export default function UtmCapture() {
  useEffect(() => {
    captureUtmParams();
  }, []);
  return null;
}
