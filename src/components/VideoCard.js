import React from 'react';
import BpkCard from '@skyscanner/backpack-web/bpk-component-card';
import BpkText, { TEXT_STYLES } from '@skyscanner/backpack-web/bpk-component-text';
import BpkImage from '@skyscanner/backpack-web/bpk-component-image';

const VideoCard = ({ thumbnail, title, channel, views }) => {
  return (
    <BpkCard
      padded={false}
      className="video-card"
      style={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        cursor: 'pointer',
        overflow: 'hidden'
      }}
    >

      <div className="video-card__thumbnail" style={{ position: 'relative' }}>
        <BpkImage
          altText={title}
          aspectRatio={16 / 9}
          src={thumbnail}
          style={{ 
            width: '100%', 
            objectFit: 'cover'
          }}
        />
      </div>

      <div style={{ padding: '12px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <BpkText 
            textStyle={TEXT_STYLES.label1} 
            tagName="h3" 
            style={{ margin: '0 0 4px 0', fontWeight: '700' }}
        >
          {title}
        </BpkText>

        <div style={{ marginTop: 'auto' }}>
            <BpkText 
                textStyle={TEXT_STYLES.caption} 
                style={{ color: '#606060', display: 'block' }}
            >
            {channel}
            </BpkText>
            <BpkText 
                textStyle={TEXT_STYLES.caption} 
                style={{ color: '#606060' }}
            >
            {views}
            </BpkText>
        </div>
      </div>
    </BpkCard>
  );
};

export default VideoCard;