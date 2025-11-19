import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import CampaignHeader from './components/CampaignHeader';
import CampaignTable from './components/CampaignTable';
import CampaignDetails from './components/CampaignDetails';
import CalendarView from './components/CalendarView';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('All Campaigns');
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [viewMode, setViewMode] = useState('list');

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
        />
        
        {/* <CampaignHeader /> */}
        <CampaignHeader 
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
        
        {/* <div className="flex-1 overflow-hidden">
          {selectedCampaign ? (
            <CampaignDetails 
              campaign={selectedCampaign}
              onBack={() => setSelectedCampaign(null)}
            />
          ) : (
            <CampaignTable 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onSelectCampaign={setSelectedCampaign}
            />
          )}
        </div> */}
        <div className="flex-1 overflow-hidden">
          {viewMode === 'calendar' ? (
            <CalendarView 
              onSelectCampaign={setSelectedCampaign}
            />
          ) : selectedCampaign ? (
            <CampaignDetails 
              campaign={selectedCampaign}
              onBack={() => setSelectedCampaign(null)}
            />
          ) : (
            <CampaignTable 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onSelectCampaign={setSelectedCampaign}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;