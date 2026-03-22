/**
 * LinkItem Component
 * 
 * Displays individual shortened URL result with original and shortened URLs.
 * 
 * Features:
 * - Copy shortened URL to clipboard functionality
 * - Dynamic button state (Copy -> Copied! -> Copy after 3s)
 * - Clickable shortened link that opens in new tab
 * - Responsive layout (stacked on mobile, horizontal on desktop)
 * 
 * Props:
 * - originalUrl: The original long URL
 * - shortUrl: The shortened URL from Bitly
 */

import React, { useState } from 'react';

const LinkItem = ({ originalUrl, shortUrl }) => {
  // State to track if the copy button was just clicked
  const [copied, setCopied] = useState(false);

  /**
   * Handle copy to clipboard functionality
   * Uses Navigator Clipboard API for modern browsers
   * Temporarily changes button state for user feedback
   */
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000); // reset copy state
  };

  return (
    <div className="link-item">
      <div className="link-item__original">
        <p>{originalUrl}</p>
      </div>
      <div className="link-item__shortened">
        <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        <button 
          className={`btn ${copied ? 'btn--copied' : 'btn--copy'}`}
          onClick={handleCopy}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default LinkItem;
