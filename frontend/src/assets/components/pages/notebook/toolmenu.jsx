import  { useState } from "react";
import FileItems from "./toolboxitems/fileitem/fileitem";
import HomeItems from "./toolboxitems/homeitem/homeitems";
import ViewItems from "./toolboxitems/viewitem/viewitems";

import HelpItems from "./toolboxitems/helpitems/helpitems";

const ToolMenu = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
    
      <div role="tablist "  className="  tabs  tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="File"
          checked={activeTab === "file"}
          onChange={() => handleTabChange("file")}
        /> 
        <div role="tabpanel" className={`tab-content  p-3 ${activeTab === "file" ? "active" : ""}`}>
          <div className="navbar min-h-10 shadow-xl bg-base-100 rounded-lg">
            <FileItems />
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Home"
          checked={activeTab === "home"}
          onChange={() => handleTabChange("home")}
        />
        <div role="tabpanel" className={`tab-content p-3 ${activeTab === "home" ? "active" : ""}`}>
          <div className="navbar    min-h-10 shadow-xl bg-base-100 rounded-lg">
            <HomeItems />
          </div>
        </div>

        {/* Add other tabs similarly */}
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="View"
          checked={activeTab === "view"}
          onChange={() => handleTabChange("view")}
        />
        <div role="tabpanel" className={`tab-content p-3 ${activeTab === "view" ? "active" : ""}`}>
          <div className="navbar min-h-10 shadow-xl bg-base-100 rounded-lg">
            <ViewItems/>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Help"
          checked={activeTab === "help"}
          onChange={() => handleTabChange("help")}
        />
        <div role="tabpanel" className={`tab-content p-3 ${activeTab === "help" ? "active" : ""}`}>
          <div className="navbar min-h-10 shadow-xl bg-base-100 rounded-lg">
            <HelpItems></HelpItems>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ToolMenu;
