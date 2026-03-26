import React from 'react';
import StatisticCard from './StatisticCard';
import brandIcon from '../assets/images/icon-brand-recognition.svg';
import detailedIcon from '../assets/images/icon-detailed-records.svg';
import customIcon from '../assets/images/icon-fully-customizable.svg';

const Statistics = () => {
  return (
    <section className="statistics">
      <div className="container">
        <div className="statistics__header">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
        </div>
        <div className="statistics__cards">
          <div className="line"></div>
          <StatisticCard 
            icon={brandIcon}
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
          />
          <StatisticCard 
            icon={detailedIcon}
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            className="card-2"
          />
          <StatisticCard 
            icon={customIcon}
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            className="card-3"
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
