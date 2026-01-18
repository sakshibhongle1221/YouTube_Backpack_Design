import React from 'react';
import PassportIcon from '@skyscanner/backpack-web/bpk-component-icon/lg/passport';
import MediaIcon from '@skyscanner/backpack-web/bpk-component-icon/lg/media'; 
import PlayIcon from '@skyscanner/backpack-web/bpk-component-icon/lg/play';
import { withLargeButtonAlignment } from '@skyscanner/backpack-web/bpk-component-icon';
import BpkText, { TEXT_STYLES } from '@skyscanner/backpack-web/bpk-component-text';

const AlignedPassportIcon = withLargeButtonAlignment(PassportIcon);
const AlignedMediaIcon = withLargeButtonAlignment(MediaIcon);
const AlignedPlayIcon = withLargeButtonAlignment(PlayIcon);

const Sidebar = () => {

  const menuItems = [
    { icon: <AlignedPassportIcon />, label: 'Home' },
    { icon: <AlignedMediaIcon />, label: 'Shorts' },
    { icon: <AlignedPlayIcon />, label: 'Subscriptions' },
  ];

  return (
    <div style={{ width: '72px', padding: '4px' }}> 
      {menuItems.map((item, index) => (
        <div 
            key={index} 
            className="sidebar-item"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px 0',
                gap: '6px',
                cursor: 'pointer',
                borderRadius: '10px'
            }}
        >
          <div>{item.icon}</div>
          <BpkText textStyle={TEXT_STYLES.caption} style={{ fontSize: '10px' }}>
            {item.label}
          </BpkText>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;