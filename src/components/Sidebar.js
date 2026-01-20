import React from 'react';
import '../styles/Sidebar.css';
import PassportIcon from '@skyscanner/backpack-web/bpk-component-icon/lg/passport';
import MediaIcon from '@skyscanner/backpack-web/bpk-component-icon/lg/media';
import PlayIcon from '@skyscanner/backpack-web/bpk-component-icon/lg/play';
import BpkText, { TEXT_STYLES } from '@skyscanner/backpack-web/bpk-component-text';
import { withLargeButtonAlignment } from '@skyscanner/backpack-web/bpk-component-icon';

const AlignedPassportIcon = withLargeButtonAlignment(PassportIcon);
const AlignedMediaIcon = withLargeButtonAlignment(MediaIcon);
const AlignedPlayIcon = withLargeButtonAlignment(PlayIcon);

const Sidebar = () => {
  const menuItems = [
    { icon: <AlignedPassportIcon />, label: 'Home', id: 'home' },
    { icon: <AlignedMediaIcon />, label: 'Shorts', id: 'shorts' },
    { icon: <AlignedPlayIcon />, label:  'Subscriptions', id: 'subscriptions' },
  ];

  return (
    <aside className="sidebar">
      {menuItems.map((item) => (
        <button
          key={item.id}
          className="sidebar-item"
          aria-label={item.label}
          title={item.label}
        >
          <div className="sidebar-icon">{item.icon}</div>
          <BpkText textStyle={TEXT_STYLES.caption} className="sidebar-label">
            {item.label}
          </BpkText>
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;