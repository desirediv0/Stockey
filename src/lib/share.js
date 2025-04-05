/**
 * Utility function to generate social sharing URLs
 * @param {string} platform - The social media platform (twitter, linkedin, email)
 * @param {string} url - The URL to share
 * @param {string} title - The title of the content being shared
 * @returns {string} The sharing URL for the specified platform
 */
export function getShareUrl(platform, url, title) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  switch (platform) {
    case "twitter":
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    case "email":
      return `mailto:?subject=${encodedTitle}&body=${encodeURIComponent(
        `I thought you might be interested in this article: ${url}`
      )}`;
    default:
      return "#";
  }
}

/**
 * Client-side function to handle copy to clipboard
 * @param {string} text - The text to copy to clipboard
 * @returns {Promise<boolean>} - Whether the copy was successful
 */
export async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error("Failed to copy: ", err);
      return false;
    }
  } else {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Make the textarea out of viewport
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      document.body.removeChild(textArea);
      return true;
    } catch (err) {
      console.error("Failed to copy: ", err);
      document.body.removeChild(textArea);
      return false;
    }
  }
}
