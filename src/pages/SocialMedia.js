import React, { useState } from "react";
import { Tabs, Tab } from "react-tabs";

const SocialMedia = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <h1 style={{ color: 'orange' }}>Connect with Us on Social Media</h1>
      <Tabs
        activeTab={activeTab}
        onSelect={(index) => setActiveTab(index)}
        className="social-tabs"
      >
        <Tab label="Instagram">
          <div className="social-content">
            <p style={{ color: 'lightgreen' }}>Follow us on Instagram (@2102Rocks) for the latest updates and photos!</p>
            {/* Add Instagram content or link here */}
          </div>
        </Tab>
        <Tab label="Facebook">
          <div className="social-content">
            <p style={{ color: 'lightgreen' }}>Like our Facebook page (@2102Rocks) to stay connected and engage with our community!</p>
            {/* Add Facebook content or link here */}
          </div>
        </Tab>
        <Tab label="LinkedIn">
          <div className="social-content">
            <p style={{ color: 'lightgreen' }}>Connect with us on LinkedIn (@2102Rocks) for professional networking and updates!</p>
            {/* Add LinkedIn content or link here */}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SocialMedia;
