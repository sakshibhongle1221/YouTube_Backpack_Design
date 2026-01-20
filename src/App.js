import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import VideoGrid from './components/VideoGrid';
import Sidebar from './components/Sidebar';
import BpkDrawer from '@skyscanner/backpack-web/bpk-component-drawer';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import FilterBar from './components/Filter';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const drawerMenuItems = [
    { label: 'Home', id:  'home' },
    { label: 'Shorts', id: 'shorts' },
    { label: 'Subscriptions', id: 'subscriptions' },
    { label: 'History', id: 'history' },
    { label: 'Your Videos', id: 'your-videos' },
    { label: 'Watch Later', id:  'watch-later' },
  ];

  return (
    <div className="app-container">
      <Header onMenuClick={toggleDrawer} />

      <div className="app-main">
        <Sidebar />

        <BpkDrawer
          id="my-drawer"
          isOpen={isDrawerOpen}
          onClose={toggleDrawer}
          title="Menu"
          closeLabel="Close menu"
          getApplicationElement={() => document.getElementById('root')}
          renderTarget={() => document.getElementById('root')}
        >
          <div className="drawer-menu">
            {drawerMenuItems.map((item) => (
              <div key={item.id} className="drawer-menu-item">
                <BpkText>{item.label}</BpkText>
              </div>
            ))}
          </div>
        </BpkDrawer>

        <div className="app-content">
          <div className="filter-bar-wrapper">
            <FilterBar
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>

          <div className="video-container">
            <VideoGrid selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;