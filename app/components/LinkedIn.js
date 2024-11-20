"use client";
import { useEffect } from "react";

const LinkedInTag = () => {
  useEffect(() => {
    const partnerId = "6634570";

    // Adaugă scriptul principal
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.text = `
      _linkedin_partner_id = "${partnerId}";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
      (function(l) {
        if (!l){
          window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q = [];
        }
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";
        b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
      })(window.lintrk);
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        alt=""
        src="https://px.ads.linkedin.com/collect/?pid=6634570&fmt=gif"
      />
    </noscript>
  );
};

export default LinkedInTag;
