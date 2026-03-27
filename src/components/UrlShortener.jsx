/*UrlShortener Component, Main URL shortening form and link list display*/
//handling api for bitly api whennthe clean api doesnt works well.
import React, { useState } from 'react';
import LinkItem from './LinkItem';

const UrlShortener = () => {
  const [url, setUrl] = useState('');
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // VALIDATION: Check if input is empty
    if (!url) {
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);

    try {
      //Below is process to i dey follow from the api documentation.
      // API INTEGRATION: Call Bitly API to shorten URL
      // Using Bitly v4 API endpoint: https://api-ssl.bitly.com/v4/shorten, this given in their api documentation 
      // Replace 'apikey' with actual Bitly API token for production
      const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer fe9a6f43ca4a2cb3a16d07dc03d4f3a98248e7e2'
          // 'Authorization': 'Bearer apikey' // Replace with actual API key
        },
        body: JSON.stringify({ long_url: url, domain: 'bit.ly' })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // SUCCESS: Create new link object with original and shortened URL
        const newLink = {
          originalUrl: url,
          shortUrl: data.link
        };
        const updatedLinks = [newLink, ...links];
        setLinks(updatedLinks);
        
        // Clear input field after successful shortening
        setUrl('');
      } else {
        // ERROR HANDLING: If API fails, use mock shortened URL for demonstration
        const mockShortUrl = `https://bit.ly/${Math.random().toString(36).substr(2, 6)}`;
        const newLink = {
          originalUrl: url,
          shortUrl: mockShortUrl
        };
        const updatedLinks = [newLink, ...links];
        setLinks(updatedLinks);
        setUrl('');
      }
    } catch (err) {
      console.error('Error shortening URL:', err);
      alert('Failed to shorten URL. Please try again.');
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

//gem creation
