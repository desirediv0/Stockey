/**
 * Generates structured data schema for an article page
 * @param {object} post - The article data
 * @param {string} url - The URL of the article
 * @returns {object} - The structured data object
 */
export function generateArticleSchema(post, url) {
  // Extract text content from HTML
  const getTextFromHtml = (html) => {
    if (!html) return "";
    // Simple regex to remove HTML tags (for description purposes)
    return html
      .replace(/<[^>]*>?/gm, " ")
      .replace(/\s\s+/g, " ")
      .trim();
  };

  const articleBody = getTextFromHtml(post.content);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [
      // Replace with actual image URLs if available
      "https://stockey.com/images/article-default.jpg",
    ],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Stockey Expert",
      url: "https://stockey.com/experts",
    },
    publisher: {
      "@type": "Organization",
      name: "Stockey",
      logo: {
        "@type": "ImageObject",
        url: "https://stockey.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleBody: articleBody.substring(0, 500) + "...", // Truncate for reasonable size
  };
}

/**
 * Generates structured data schema for a list of articles (e.g. Resources page)
 * @param {array} posts - Array of article data
 * @param {string} baseUrl - Base URL for articles
 * @returns {object} - The structured data object
 */
export function generateArticleListSchema(posts, baseUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Article",
        url: `${baseUrl}/${post.id}`,
        name: post.title,
        description: post.excerpt,
        author: {
          "@type": "Person",
          name: "Stockey Expert",
        },
        publisher: {
          "@type": "Organization",
          name: "Stockey",
          logo: {
            "@type": "ImageObject",
            url: "https://stockey.com/logo.png",
          },
        },
      },
    })),
  };
}
