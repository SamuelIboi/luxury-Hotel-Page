import { useState, Fragment } from "react";

const tabs = ["Flights", "Stay", "Car rentals", "Cruises"];

const TabBar = () => {
  const [activeTab, setActiveTab] = useState("Stay");

  return (
    <div className="flex items-center justify-center gap-1">
      {tabs.map((tab, i) => (
        <Fragment key={tab}>
          <button
            onClick={() => setActiveTab(tab)}
            className={`px-1 py-2 rounded-full text-sm font-medium transition-colors ${
              tab === activeTab
                ? "bg-yellow-300 text-gray-900"
                : "text-black hover:text-gray-600"
            }`}
          >
            {tab}
          </button>
          {i < tabs.length - 1 && (
            <span className="text-gray-300 text-sm select-none">·</span>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default TabBar;
