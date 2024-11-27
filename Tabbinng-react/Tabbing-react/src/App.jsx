import React, { useState } from 'react';
import { tabs } from './Data/tabs'; // Assuming `tabs` is an array of objects with `title` and `Description`

export default function App() {
  const [hoveredTabIndex, setHoveredTabIndex] = useState(0); // State to track the hovered tab

  return (
    <div className="Tabouter">
      <h1>Law Prep Vision Mission And Values</h1>
      <ul>
        {tabs.map((tabsItem, index) => (
          <li key={index}>
            <button
              className={hoveredTabIndex === index ? 'active' : ''}

              onMouseEnter={() => setHoveredTabIndex(index)} // Set hovered tab on mouse enter
              onMouseLeave={() => setHoveredTabIndex(-1)} // Reset hover when mouse leaves
            >
              {tabsItem.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {hoveredTabIndex >= 0 && tabs[hoveredTabIndex] && (
          <p>{tabs[hoveredTabIndex].Description}</p>
        )}
      </div>
    </div>
  );
}
