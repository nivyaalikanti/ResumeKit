import React, { useState } from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import './ResumeBuilder.css';

function ResumeBuilder() {
  const [resumeData, setResumeData] = useState({
    personalDetails: {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    summary: '',
    experience: [],
    education: [],
    skills: [],
  });

  // New state for margins
  const [margins, setMargins] = useState({
    top: 2.5, // Default 2.5cm
    bottom: 2.5,
    left: 2.5,
    right: 2.5,
  });

  const handleInputChange = (section, field, value) => {
    setResumeData(prevData => {
      if (typeof prevData[section] === 'object' && prevData[section] !== null) {
        return {
          ...prevData,
          [section]: {
            ...prevData[section],
            [field]: value,
          },
        };
      }
      return {
        ...prevData,
        [section]: value,
      };
    });
  };

  // New handler for margin changes
  const handleMarginChange = (side, value) => {
    setMargins(prevMargins => ({
      ...prevMargins,
      [side]: parseFloat(value), // Ensure value is a number
    }));
  };

  return (
    <div className="resume-builder-container">
      <LeftPanel 
        resumeData={resumeData} 
        onInputChange={handleInputChange} 
        margins={margins} // Pass margins to LeftPanel
        onMarginChange={handleMarginChange} // Pass margin handler
      />
      <RightPanel 
        resumeData={resumeData} 
        margins={margins} // Pass margins to RightPanel
      />
    </div>
  );
}

export default ResumeBuilder;