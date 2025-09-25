import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './ResumeBuilder.css';

function RightPanel({ resumeData, margins }) { // Receive margins prop

  const handleDownloadPdf = () => {
    const input = document.getElementById('a4-page-container');
    
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("resume.pdf");
    });
  };

  // Dynamically apply margins using inline styles
  const a4PageStyle = {
    paddingTop: `${margins.top}cm`,
    paddingBottom: `${margins.bottom}cm`,
    paddingLeft: `${margins.left}cm`,
    paddingRight: `${margins.right}cm`,
  };

  return (
    <div className="right-panel">
      <div id="a4-page-container" className="a4-page" style={a4PageStyle}> {/* Apply dynamic style */}
        {/* Personal Details */}
        <div className="resume-section">
          <h1>{resumeData.personalDetails.name || 'Your Name'}</h1>
          <p>{resumeData.personalDetails.email || 'Your Email'} | {resumeData.personalDetails.phone || 'Your Phone'}</p>
        </div>
        
        {/* Professional Summary */}
        <div className="resume-section">
          <h3>Professional Summary</h3>
          <p>{resumeData.summary || 'A brief summary will appear here.'}</p>
        </div>
      </div>
      <button onClick={handleDownloadPdf} className="download-btn">
        Download PDF
      </button>
    </div>
  );
}

export default RightPanel;