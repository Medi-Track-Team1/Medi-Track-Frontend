import React from 'react';
import Button from './Button';
import '../styles/FeatureCard.css';
// Import CSS

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  buttonText,
  buttonVariant = 'default',
  stats,
  onButtonClick
}) => {
  return (
    <div className="feature-card">
      <div className="feature-header">
        <div className="feature-icon-container">
          <Icon className="feature-icon" />
        </div>
        <div className="feature-title-group">
          <h3 className="feature-title">{title}</h3>
          {stats && <p className="feature-stats">{stats}</p>}
        </div>
      </div>

      <p className="feature-description">{description}</p>

      <Button
        className={`feature-button ${buttonVariant}`}
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default FeatureCard;
