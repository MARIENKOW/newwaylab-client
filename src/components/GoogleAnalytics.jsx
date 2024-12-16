"use client";

import { useEffect } from "react";

export default function GoogleAnalytics() {
   useEffect(() => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
         dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-2MBXC01B95");
   }, []);
   return "";
}
