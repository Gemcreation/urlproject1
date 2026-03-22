/**
 * StatisticCard Component
 * 
 * Individual card component for displaying feature/statistic information.
 * 
 * Features:
 * - Circular icon background (dark purple)
 * - Icon centered and positioned to overlap card top
 * - Title and description text
 * - White background with subtle shadow
 * - Reusable component for Statistics section
 * 
 * Props:
 * - icon: SVG icon image source
 * - title: Card title/heading
 * - description: Card description text
 * - className: Optional CSS class for custom styling (e.g., card-2, card-3)
 * 
 * Responsive:
 * - Cards have cascading vertical offset on desktop (64px, 128px, etc.)
 */

import React from 'react';

const StatisticCard = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`statistic-card ${className}`}>
      <div className="statistic-card__icon">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default StatisticCard;
