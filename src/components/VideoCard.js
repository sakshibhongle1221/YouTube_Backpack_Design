import React, { useState } from 'react';
import '../styles/VideoCard.css';
import BpkCard from '@skyscanner/backpack-web/bpk-component-card';
import BpkText, { TEXT_STYLES } from '@skyscanner/backpack-web/bpk-component-text';
import BpkImage from '@skyscanner/backpack-web/bpk-component-image';

const VideoCard = ({ thumbnail, title, channel, views }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <BpkCard
      padded={false}
      className="video-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label={`${title} by ${channel}`}
    >
      <div className="video-card-thumbnail">
        <BpkImage
          altText={title}
          aspectRatio={16 / 9}
          src={thumbnail}
          className="video-card-image"
        />
        {isHovered && (
          <div className="video-card-overlay">
            <BpkText textStyle={TEXT_STYLES.label1} className="overlay-text">
            
            </BpkText>
          </div>
        )}
      </div>

      <div className="video-card-content">
        <BpkText
          textStyle={TEXT_STYLES.label1}
          tagName="h3"
          className="video-card-title"
        >
          {title}
        </BpkText>

        <div className="video-card-metadata">
          <BpkText
            textStyle={TEXT_STYLES.caption}
            className="video-card-channel"
          >
            {channel}
          </BpkText>
          <BpkText
            textStyle={TEXT_STYLES.caption}
            className="video-card-views"
          >
            {views}
          </BpkText>
        </div>
      </div>
    </BpkCard>
  );
};

export default VideoCard;