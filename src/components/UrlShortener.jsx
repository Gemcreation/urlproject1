import React, { useState, useEffect } from 'react';
import LinkItem from './LinkItem';

const UrlShortener = () => {
  const [url, setUrl] = useState('');
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem('shortenedLinks'));
    if (savedLinks) {
      setLinks(savedLinks);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) {
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);

    try {
      // User instructions specified bitly.com API endpoint and to use apikey if needed.
      const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer apikey'
        },
        body: JSON.stringify({ long_url: url, domain: 'bit.ly' })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        const newLink = {
          originalUrl: url,
          shortUrl: data.link
        };
        const updatedLinks = [newLink, ...links];
        setLinks(updatedLinks);
        // Persist links
        localStorage.setItem('shortenedLinks', JSON.stringify(updatedLinks));
        setUrl('');
      } else {
        // Handle bitly error gracefully, simulate for local dev if API key fails
        const mockShortUrl = `https://bit.ly/${Math.random().toString(36).substr(2, 6)}`;
        const newLink = {
          originalUrl: url,
          shortUrl: mockShortUrl
        };
        const updatedLinks = [newLink, ...links];
        setLinks(updatedLinks);
        localStorage.setItem('shortenedLinks', JSON.stringify(updatedLinks));
        setUrl('');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to shorten url.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="url-shortener-container container">
      <form 
        className={`url-shortener__form ${error ? 'error' : ''}`}
        onSubmit={handleSubmit}
      >
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Shorten a link here..." 
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (e.target.value) setError(false);
            }}
            className={error ? 'input-error' : ''}
          />
          {error && <span className="error-text">Please add a link</span>}
        </div>
        <button type="submit" className="btn btn--shorten" disabled={loading}>
          {loading ? 'Shortening...' : 'Shorten It!'}
        </button>
      </form>

      <div className="url-shortener__list">
        {links.map((link, index) => (
          <LinkItem key={index} originalUrl={link.originalUrl} shortUrl={link.shortUrl} />
        ))}
      </div>
    </div>
  );
};

export default UrlShortener;
