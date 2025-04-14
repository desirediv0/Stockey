"use client";
import { useEffect } from "react";

export default function TradingViewSectorStockWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.async = true;
    script.innerHTML = `
    {
      "title": "Stocks",
      "width": "100%",
      "height": "100%",
      "locale": "en",
      "showSymbolLogo": true,
      "symbolsGroups": [
        {
          "name": "Financial",
          "symbols": [
            { "name": "NYSE:JPM", "displayName": "JPMorgan Chase" },
            { "name": "NYSE:WFC", "displayName": "Wells Fargo Co New" },
            { "name": "NYSE:BAC", "displayName": "Bank Amer Corp" },
            { "name": "NYSE:HSBC", "displayName": "Hsbc Hldgs Plc" },
            { "name": "NYSE:C", "displayName": "Citigroup Inc" },
            { "name": "NYSE:MA", "displayName": "Mastercard Incorporated" }
          ]
        },
        {
          "name": "Technology",
          "symbols": [
            { "name": "NASDAQ:AAPL", "displayName": "Apple" },
            { "name": "NASDAQ:GOOGL", "displayName": "Alphabet" },
            { "name": "NASDAQ:MSFT", "displayName": "Microsoft" },
            { "name": "NASDAQ:FB", "displayName": "Meta Platforms" },
            { "name": "NYSE:ORCL", "displayName": "Oracle Corp" },
            { "name": "NASDAQ:INTC", "displayName": "Intel Corp" }
          ]
        },
        {
          "name": "Services",
          "symbols": [
            { "name": "NASDAQ:AMZN", "displayName": "Amazon" },
            { "name": "NYSE:BABA", "displayName": "Alibaba Group Hldg Ltd" },
            { "name": "NYSE:T", "displayName": "At&t Inc" },
            { "name": "NYSE:WMT", "displayName": "Walmart" },
            { "name": "NYSE:V", "displayName": "Visa" }
          ]
        }
      ],
      "colorTheme": "light"
    }`;

    const container = document.getElementById("tradingview-sector-widget");
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
          id="tradingview-sector-widget"
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
