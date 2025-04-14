"use client";
import { useEffect } from "react";

export default function TradingViewPerformanceHeatmap() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
    script.async = true;
    script.innerHTML = `
    {
      "exchanges": [],
      "dataSource": "SENSEX",
      "grouping": "sector",
      "blockSize": "market_cap_basic",
      "blockColor": "Perf.W",
      "locale": "en",
      "symbolUrl": "",
      "colorTheme": "light",
      "hasTopBar": true,
      "isDataSetEnabled": false,
      "isZoomEnabled": true,
      "hasSymbolTooltip": true,
      "isMonoSize": false,
      "width": "100%",
      "height": "100%"
    }`;

    const container = document.getElementById("tradingview-heatmap-widget");
    if (container) {
      container.innerHTML = "";
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full h-full">
      <div
        className="tradingview-widget-container"
        style={{ height: "100%", width: "100%" }}
      >
        <div
          id="tradingview-heatmap-widget"
          className="tradingview-widget-container__widget"
          style={{ height: "100%", width: "100%" }}
        />
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          >
          </a>
        </div>
      </div>
    </div>
  );
}
