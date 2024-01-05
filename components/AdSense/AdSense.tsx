import { useEffect } from "react";

interface IAdSense {
  adSlot: string;
}

declare global {
    interface Window {
      adsbygoogle?: any[];
    }
  }

const AdSense = ({ adSlot } : IAdSense) => {
  
    useEffect(() => {
    if (window) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-3186822144211432" // Replace with your publisher ID
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};
export default AdSense;