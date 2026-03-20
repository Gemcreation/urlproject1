import React, { useState } from 'react';

const LinkItem = ({ originalUrl, shortUrl }) => {
  const [copied, setCopied] = useState(false);

  // Clipboard logic
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
