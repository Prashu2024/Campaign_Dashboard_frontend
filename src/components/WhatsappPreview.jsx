import React from 'react';
import { MoreVertical, ArrowLeft, Phone, Video, ChevronDown } from 'lucide-react';

const WhatsAppPreview = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm sticky top-6">
      {/* WhatsApp Header */}
      <div className="bg-teal-700 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-1 hover:bg-teal-600 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-lg font-medium text-gray-700">C</span>
          </div>
          <div>
            <p className="font-medium">Company name</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-teal-600 rounded-full transition-colors">
            <Video className="w-5 h-5" />
          </button>
          <button className="p-1 hover:bg-teal-600 rounded-full transition-colors">
            <Phone className="w-5 h-5" />
          </button>
          <button className="p-1 hover:bg-teal-600 rounded-full transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div 
        className="bg-[#E5DDD5] p-4 space-y-4"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d9d9d9' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          minHeight: '400px',
          maxHeight: '500px'
        }}
      >
        {/* Date Badge */}
        <div className="flex justify-center">
          <div className="bg-white bg-opacity-90 px-3 py-1 rounded-lg text-xs text-gray-600 shadow-sm">
            Today
          </div>
        </div>

        {/* Message Card */}
        <div className="max-w-xs ml-auto">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Network Logos */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 flex items-center justify-around">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#0066CC"/>
                    <circle cx="12" cy="12" r="6" fill="#white"/>
                  </svg>
                </div>
                <span className="font-bold text-blue-600">Jio</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#EE2737"/>
                    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">VI</text>
                  </svg>
                </div>
                <span className="font-bold text-red-600">VI</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#E60000"/>
                    <circle cx="12" cy="12" r="4" fill="white"/>
                  </svg>
                </div>
                <span className="font-bold text-red-600">airte</span>
              </div>
            </div>

            {/* Phone Icon */}
            <div className="px-4 py-3 flex justify-center">
              <div className="relative">
                <div className="w-16 h-24 border-4 border-blue-600 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50">
                  <div className="absolute -top-2 -right-2 -bottom-2 -left-2 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl -z-10 opacity-50"></div>
                  <div className="text-3xl">💥</div>
                </div>
              </div>
              <div className="ml-4 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-gray-600">BSNL</span>
              </div>
            </div>

            {/* Message Text */}
            <div className="px-4 pb-3">
              <p className="text-sm text-gray-800 text-center leading-relaxed">
                Recharge with 349 Rs. and get best value for 28 days, 2GB/day + Unlimited 5G
              </p>
            </div>

            {/* Action Buttons */}
            <div className="px-4 pb-4 space-y-2">
              <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                <ChevronDown className="w-4 h-4 rotate-90" />
                Recharge with 349 Rs.
              </button>
              <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                <ChevronDown className="w-4 h-4 rotate-90" />
                More Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPreview;