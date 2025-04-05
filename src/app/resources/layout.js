export const metadata = {
  title: "Trading Resources & Knowledge Center | Stockey",
  description:
    "Expert trading analysis, tutorials, and market insights to improve your trading skills and make more informed decisions.",
  openGraph: {
    title: "Trading Resources & Knowledge Center | Stockey",
    description:
      "Expert trading analysis, tutorials, and market insights to improve your trading skills and make more informed decisions.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", //  actual OG image path
        width: 1200,
        height: 630,
        alt: "Stockey Trading Resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trading Resources & Knowledge Center | Stockey",
    description:
      "Expert trading analysis, tutorials, and market insights to improve your trading skills and make more informed decisions.",
  },
  keywords: [
    "trading",
    "investment",
    "market analysis",
    "finance education",
    "portfolio management",
    "trading psychology",
  ],
};

export default function ResourcesLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Stockey Trading Resources",
            url: "https://stockey.com/resources",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://stockey.com/resources/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
