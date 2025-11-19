import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { campaignsData } from '../data/campaignsData';

const CalendarView = ({ onSelectCampaign }) => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 6, 1)); // July 2024
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [viewType, setViewType] = useState('Month'); // Month, Week, Day

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Get calendar days
  const getCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    
    const firstDayIndex = firstDay.getDay();
    const numberOfDays = lastDay.getDate();
    const prevNumberOfDays = prevLastDay.getDate();
    
    const days = [];
    
    // Previous month days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      days.push({
        day: prevNumberOfDays - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevNumberOfDays - i)
      });
    }
    
    // Current month days
    for (let i = 1; i <= numberOfDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i)
      });
    }
    
    // Next month days
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i)
      });
    }
    
    return days;
  };

  // Get campaigns for a specific date
  const getCampaignsForDate = (date) => {
    const dateStr = date.toISOString().split('T')[0];
    return campaignsData.filter(campaign => campaign.scheduledDate === dateStr);
  };

  // Check if date is today
  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getStatusColor = (status) => {
    const colors = {
      'Ongoing': 'bg-orange-500',
      'Scheduled': 'bg-blue-500',
      'Draft': 'bg-gray-500',
      'Approval pending': 'bg-orange-500',
      'Aborted': 'bg-red-500'
    };
    return colors[status] || 'bg-gray-500';
  };

  const calendarDays = getCalendarDays();

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Calendar Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrevMonth}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextMonth}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex gap-2 border border-gray-300 rounded-lg overflow-hidden">
          {['Month', 'Week', 'Day'].map((type) => (
            <button
              key={type}
              onClick={() => setViewType(type)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                viewType === type
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-7 border-b border-gray-200 sticky top-0 bg-white z-10">
          {dayNames.map((day) => (
            <div
              key={day}
              className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-200 last:border-r-0"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7" style={{ gridAutoRows: 'minmax(120px, 1fr)' }}>
          {calendarDays.map((dayObj, index) => {
            const campaigns = getCampaignsForDate(dayObj.date);
            const isTodayDate = isToday(dayObj.date);
            
            return (
              <div
                key={index}
                className={`border-r border-b border-gray-200 p-2 ${
                  !dayObj.isCurrentMonth ? 'bg-gray-50' : 'bg-white'
                } ${isTodayDate ? 'bg-yellow-50' : ''}`}
              >
                <div className={`text-sm font-medium mb-2 ${
                  !dayObj.isCurrentMonth ? 'text-gray-400' : 'text-gray-900'
                } ${isTodayDate ? 'text-yellow-800' : ''}`}>
                  {dayObj.day}
                </div>
                
                <div className="space-y-1">
                  {campaigns.map((campaign) => (
                    <button
                      key={campaign.id}
                      onClick={() => setSelectedCampaign(campaign)}
                      className="w-full text-left px-2 py-1 rounded text-xs hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-1">
                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${getStatusColor(campaign.status)}`}></span>
                        <span className="truncate">
                          {campaign.scheduledTime && `${campaign.scheduledTime} `}
                          {campaign.name}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Campaign Detail Modal */}
      {selectedCampaign && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  selectedCampaign.status === 'Ongoing' ? 'bg-orange-100 text-orange-700' :
                  selectedCampaign.status === 'Scheduled' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {selectedCampaign.status}
                </span>
              </div>
              <button
                onClick={() => setSelectedCampaign(null)}
                className="p-2 hover:bg-gray-100 rounded transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {selectedCampaign.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {selectedCampaign.type} | {selectedCampaign.edited}
              </p>

              {selectedCampaign.imageUrl && (
                <img
                  src={selectedCampaign.imageUrl}
                  alt={selectedCampaign.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}

              <div className="prose prose-sm max-w-none">
                <p className="text-gray-700 mb-4 whitespace-pre-wrap">{selectedCampaign.message}</p>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-gray-500">Recipient Source</p>
                    <p className="text-sm font-medium text-gray-900">{selectedCampaign.recipientSource}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Recipients</p>
                    <p className="text-sm font-medium text-gray-900">{selectedCampaign.recipients}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Created On</p>
                    <p className="text-sm font-medium text-gray-900">{selectedCampaign.createdOn}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Scheduled Date</p>
                    <p className="text-sm font-medium text-gray-900">
                      {new Date(selectedCampaign.scheduledDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                      {selectedCampaign.scheduledTime && ` at ${selectedCampaign.scheduledTime}`}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => {
                    onSelectCampaign(selectedCampaign);
                    setSelectedCampaign(null);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Full Details
                </button>
                <button
                  onClick={() => setSelectedCampaign(null)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarView;