import React from 'react';
import { ChevronLeft, AlertCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import WhatsAppPreview from './WhatsAppPreview';

const CampaignDetails = ({ campaign, onBack }) => {
  // Chart data based on campaign metrics
  const chartData = [
    { name: 'Sent', value: campaign.details.sent },
    { name: 'Delivered', value: campaign.details.delivered },
    { name: 'Response', value: campaign.details.response },
    { name: 'Conversation', value: campaign.details.conversation },
  ];

  return (
    <div className="h-full overflow-auto bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Upcoming sale</h2>
          </div>
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
            {campaign.status}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Stats and Chart */}
          <div className="lg:col-span-2 space-y-6">
            {/* Rejection Notice */}
            {campaign.details.rejectionNote && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex gap-3">
                <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Campaign rejected with note :</p>
                  <p className="text-gray-700 mt-1">{campaign.details.rejectionNote}</p>
                </div>
              </div>
            )}

            {/* Valid Numbers Info */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <p className="text-gray-700">
                Out of <span className="font-semibold">{campaign.details.totalRecipients.toLocaleString()}</span> we have found{' '}
                <span className="font-semibold text-green-600">{campaign.details.validNumbers.toLocaleString()}</span> valid numbers!
              </p>
            </div>

            {/* Stats Chart */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Sent</p>
                  <p className="text-2xl font-semibold text-gray-900">{campaign.details.sent.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Delivered</p>
                  <p className="text-2xl font-semibold text-gray-900">{campaign.details.delivered.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Response</p>
                  <p className="text-2xl font-semibold text-gray-900">{campaign.details.response.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Conversation</p>
                  <p className="text-2xl font-semibold text-gray-900">{campaign.details.conversation.toLocaleString()}</p>
                </div>
              </div>

              {/* Chart */}
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="name" stroke="#6B7280" fontSize={12} />
                  <YAxis stroke="#6B7280" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px',
                      padding: '8px 12px'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>

              {/* Additional Metrics */}
              <div className="grid grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Valid Number</p>
                    <p className="text-xl font-semibold text-gray-900">{campaign.details.validNumberPercent}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Invalid Number</p>
                    <p className="text-xl font-semibold text-gray-900">{campaign.details.invalidNumbers}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Opt - out</p>
                    <p className="text-xl font-semibold text-gray-900">{campaign.details.optOut}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Response rate</p>
                    <p className="text-xl font-semibold text-gray-900">{campaign.details.responseRate}%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Campaign Details Table */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Campaign description : {campaign.details.description}
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-500">Total recipients</span>
                    <span className="font-medium text-gray-900">{campaign.details.totalRecipients.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-500">Campaign Type</span>
                    <span className="font-medium text-gray-900">{campaign.details.campaignType}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-500">Channel</span>
                    <span className="font-medium text-gray-900 flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      {campaign.details.channel}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-500">Sender ID</span>
                    <span className="font-medium text-gray-900">{campaign.details.senderId}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-500">Total credits consumed</span>
                    <span className="font-medium text-gray-900">{campaign.details.creditsConsumed.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - WhatsApp Preview */}
          <div className="lg:col-span-1">
            <WhatsAppPreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
