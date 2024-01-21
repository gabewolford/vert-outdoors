"use client";

import Aos from "aos";
import { useEffect } from "react";

export default function AOSLoader() {
  useEffect(() => {
    Aos.init();
  });
}
