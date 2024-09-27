// components/GoogleAdsense.js
"use client";
import { useEffect } from "react";
import Script from "next/script";

const GoogleAdsense = ({ adClient }) => {
  useEffect(() => {
    (adsbygoogle = window.adsbygoogle || []).push({});
  }, [adClient]);

  return (
    <>
      {/* Meta tag pentru Google AdSense */}
      <meta name="google-adsense-account" content={adClient} />

      {/* Script pentru Google AdSense */}
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        strategy="afterInteractive"
        async
      />

      {/* Initializarea reclamelor AdSense */}
      <Script id="adsense-init" strategy="afterInteractive">
        {`
          (adsbygoogle = window.adsbygoogle || []).push({});
        `}
      </Script>
    </>
  );
};

export default GoogleAdsense;
