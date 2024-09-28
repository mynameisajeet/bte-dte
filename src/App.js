import React, { useState } from 'react';
import EastTab from './components/east';  // Import NewsTab component
import WestTab from './components/west'; // Import MusicTab component
import BundelkhandTab from './components/bundelkhand';
import CenterTab from './components/center';

const App = () => {
  const [activeTab, setActiveTab] = useState('west');  // Default tab is "west"

  // Handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'west' ? 'active' : ''}`} 
          onClick={() => handleTabClick('west')}
        >
          EZ
        </div>
        <div 
          className={`tab ${activeTab === 'center' ? 'active' : ''}`} 
          onClick={() => handleTabClick('center')}
        >
          CZ
        </div>
        <div 
          className={`tab ${activeTab === 'bundelkhand' ? 'active' : ''}`} 
          onClick={() => handleTabClick('bundelkhand')}
        >
          BZ
        </div>
        <div 
          className={`tab ${activeTab === 'east' ? 'active' : ''}`} 
          onClick={() => handleTabClick('east')}
        >
          EZ
        </div>
      </div>

      {/* Render the appropriate component based on the active tab */}
      {activeTab === 'west' && <WestTab />}
      {activeTab === 'center' && <CenterTab/>}
      {activeTab === 'bundelkhand' && <BundelkhandTab/>}
      {activeTab === 'east' && <EastTab/>}
    </div>
  );
};

export default App;
