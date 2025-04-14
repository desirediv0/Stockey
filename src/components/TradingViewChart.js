"use client";
import { useEffect } from "react";

export default function TradingViewChart() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = `
    {
      "autosize": true,
      "symbol": "NASDAQ:AAPL",
      "interval": "W",
      "timezone": "Asia/Kolkata",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "hide_top_toolbar": true,
      "hide_legend": true,
      "allow_symbol_change": false,
      "save_image": false,
      "hide_volume": true,
      "support_host": "https://www.tradingview.com"
    }`;

    const container = document.getElementById("tradingview-widget");
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
          id="tradingview-widget"
          className="tradingview-widget-container__widget"
          style={{ height: "calc(100% - 32px)", width: "100%" }}
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
