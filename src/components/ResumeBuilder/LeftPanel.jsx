import React from 'react';

function LeftPanel({ resumeData, onInputChange, margins, onMarginChange }) { // Receive new props
  return (
    <div className="left-panel">
      <h2>Enter Your Details</h2>
      
      {/* Personal Details Section */}
      <div className="input-section">
        <h3>Personal Details</h3>
        <input 
          type="text" 
          placeholder="Full Name" 
          value={resumeData.personalDetails.name}
          onChange={(e) => onInputChange('personalDetails', 'name', e.target.value)}
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          value={resumeData.personalDetails.email}
          onChange={(e) => onInputChange('personalDetails', 'email', e.target.value)}
        />
        <input 
          type="tel" 
          placeholder="Phone Number" 
          value={resumeData.personalDetails.phone}
          onChange={(e) => onInputChange('personalDetails', 'phone', e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Address" 
          value={resumeData.personalDetails.address}
          onChange={(e) => onInputChange('personalDetails', 'address', e.target.value)}
        />
      </div>

      {/* Summary Section */}
      <div className="input-section">
        <h3>Professional Summary</h3>
        <textarea 
          placeholder="Write a brief professional summary..."
          rows="5"
          value={resumeData.summary}
          onChange={(e) => onInputChange('summary', null, e.target.value)}
        />
      </div>

      {/* Margin Adjustment Section (NEW) */}
      <div className="input-section">
        <h3>Adjust Margins (cm)</h3>
        <label>Top Margin:</label>
        <input 
          type="number" 
          min="0.5" 
          max="5" 
          step="0.1" 
          value={margins.top}
          onChange={(e) => onMarginChange('top', e.target.value)}
        />
        <label>Bottom Margin:</label>
        <input 
          type="number" 
          min="0.5" 
          max="5" 
          step="0.1" 
          value={margins.bottom}
          onChange={(e) => onMarginChange('bottom', e.target.value)}
        />
        <label>Left Margin:</label>
        <input 
          type="number" 
          min="0.5" 
          max="5" 
          step="0.1" 
          value={margins.left}
          onChange={(e) => onMarginChange('left', e.target.value)}
        />
        <label>Right Margin:</label>
        <input 
          type="number" 
          min="0.5" 
          max="5" 
          step="0.1" 
          value={margins.right}
          onChange={(e) => onMarginChange('right', e.target.value)}
        />
      </div>
    </div>
  );
}

export default LeftPanel;