import React, { useState, useMemo } from 'react';
import { Search, Filter, Megaphone, Calendar, MessageSquare, HelpCircle, MoreVertical } from 'lucide-react';
import Pagination from './Pagination';
import { campaignsData } from '../data/campaignsData';
import CampaignDetails from './CampaignDetails';

const CampaignTable = ({ activeTab, setActiveTab, onSelectCampaign }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [showDropdown, setShowDropdown] = useState(null);
  const [selectedActivityCampaign, setSelectedActivityCampaign] = useState(null);

  // Show campaign details when Activity log tab is active
  if (activeTab === 'Activity log' && !selectedActivityCampaign) {
    // Auto-select first campaign with approval pending or ongoing status for Activity log
    const defaultCampaign = campaignsData.find(c => c.status === 'Approval pending' || c.status === 'Ongoing') || campaignsData[0];
    setSelectedActivityCampaign(defaultCampaign);
  }

  const filteredCampaigns = useMemo(() => {
    return campaignsData.filter(campaign => 
      campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.status.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredCampaigns.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCampaigns = filteredCampaigns.slice(startIndex, endIndex);

  const getStatusColor = (status) => {
    const colors = {
      'Approval pending': 'bg-orange-100 text-orange-700',
      'Draft': 'bg-gray-100 text-gray-700',
      'Scheduled': 'bg-blue-100 text-blue-700',
      'Aborted': 'bg-red-100 text-red-700',
      'Ongoing': 'bg-orange-100 text-orange-600'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const getStatusIcon = (status) => {
    if (status === 'Approval pending') return <Megaphone className="w-5 h-5 text-blue-500" />;
    if (status === 'Scheduled') return <Calendar className="w-5 h-5 text-blue-500" />;
    return <MessageSquare className="w-5 h-5 text-blue-500" />;
  };

  const handleRowClick = (campaign) => {
    onSelectCampaign(campaign);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="bg-white border-b border-gray-200 px-6 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('All Campaigns')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                activeTab === 'All Campaigns'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              All Campaigns
            </button>
            <button
              onClick={() => setActiveTab('Activity log')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                activeTab === 'Activity log'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Activity log
            </button>
          </div>

          <div className="flex items-center gap-3 py-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Campaign Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Message
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Recipient's Source
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No. of Recipients
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created On
              </th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentCampaigns.map((campaign) => (
              <tr 
                key={campaign.id} 
                className="hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => handleRowClick(campaign)}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      {getStatusIcon(campaign.status)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{campaign.name}</div>
                      <div className="text-sm text-gray-500">{campaign.type} | {campaign.edited}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                  {campaign.message}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {campaign.recipientSource}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {campaign.recipients}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                    {campaign.status}
                    {campaign.status === 'Approval pending' && (
                      <HelpCircle className="w-3 h-3" />
                    )}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {campaign.createdOn}
                </td>
                <td className="px-6 py-4">
                  <div className="relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowDropdown(showDropdown === campaign.id ? null : campaign.id);
                      }}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      <MoreVertical className="w-5 h-5 text-gray-400" />
                    </button>
                    {showDropdown === campaign.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowDropdown(null);
                          }}
                          className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors"
                        >
                          Rerun campaign
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRowClick(campaign);
                          }}
                          className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors"
                        >
                          View details
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowDropdown(null);
                          }}
                          className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowDropdown(null);
                          }}
                          className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 text-red-600 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredCampaigns.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No campaigns found matching your search.
          </div>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={(value) => {
          setItemsPerPage(value);
          setCurrentPage(1);
        }}
      />
    </div>
  );
};

export default CampaignTable;