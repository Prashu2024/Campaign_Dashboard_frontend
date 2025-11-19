import React from "react";
import { List, Calendar, HelpCircle } from "lucide-react";

const CampaignHeader = ({ viewMode, setViewMode }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-6 flex-shrink-0">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Campaign</h1>
          <p className="text-gray-500 mt-1">
            Automate your customer journey with pre build recepies
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <List className="w-6 h-6 text-gray-600" />
          </button>
          {/* <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <Calendar className="w-6 h-6 text-gray-600" />
          </button> */}
          <button
            onClick={() => setViewMode("calendar")}
            className={`p-2 rounded transition-colors ${
              viewMode === "calendar"
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-100 text-gray-600"
            }`}
          >
            <Calendar className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <HelpCircle className="w-6 h-6 text-gray-600" />
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors">
            Create Campaign
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignHeader;
