import React,{useState} from 'react';
import './App.scss';
import Header from './components/Header.js';
import VideoGrid from './components/VideoGrid';
import Sidebar from './components/Sidebar';
import BpkDrawer from '@skyscanner/backpack-web/bpk-component-drawer';
import BpkText, { TEXT_STYLES } from '@skyscanner/backpack-web/bpk-component-text';
import FilterBar from './components/Filter';
function App() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="app-container">
      <Header onMenuClick={toggleDrawer} />

      <div style={{ display: 'flex' }}>
        <Sidebar/>

        <BpkDrawer
          id="my-drawer"
          isOpen={isDrawerOpen}
          onClose={toggleDrawer}
          title="Menu"
          closeLabel="Close menu"
          getApplicationElement={() => document.getElementById('root')}
          renderTarget={() => document.getElementById('root')}
        >
          <div style={{ padding: '20px' }}>
             <BpkText textStyle={TEXT_STYLES.heading3}>Home</BpkText>
             <div style={{ margin: '20px 0' }}><BpkText>Shorts</BpkText></div>
             <div style={{ margin: '20px 0' }}><BpkText>Subscriptions</BpkText></div>
             <div style={{ margin: '20px 0' }}><BpkText>History</BpkText></div>
             <div style={{ margin: '20px 0' }}><BpkText>Your Videos</BpkText></div>
             <div style={{ margin: '20px 0' }}><BpkText>Watch Later</BpkText></div>
          </div>
        </BpkDrawer>

        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

            <div style={{ position: 'sticky', top: 0, zIndex: 10 }}>
                <FilterBar
                  selectedCategory={selectedCategory} 
                    onSelect={setSelectedCategory}
                />
            </div>

            <div style={{ flex: 1, overflowY: 'auto' }}>
                <VideoGrid selectedCategory={selectedCategory}/>
            </div>
            
        </div>

      </div>

    </div>
  );
}

export default App;