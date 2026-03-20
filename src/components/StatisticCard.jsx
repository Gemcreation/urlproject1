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
