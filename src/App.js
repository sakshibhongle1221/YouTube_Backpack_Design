import React from 'react';
import './App.scss';
import Header from './components/Header.js';
import VideoGrid from './components/VideoGrid';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />

      <div style={{ display: 'flex' }}>
        <Sidebar />

        <div style={{ flexGrow: 1 }}>
            <VideoGrid />
        </div>

      </div>

    </div>
  );
}

export default App;