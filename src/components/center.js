import React, { useEffect, useState } from 'react';
import '../App.css'; // Import your CSS file

const WestApp = () => {
  
  return (
    <div className="news-container">
       <div className="developer-info">Developed by Ajeet Agarwal</div> {/* New section */}
             
      <div className="webview-area">
        <iframe 
          src={"https://mynameisajeet.github.io/centerzonepolytechnic/"} 
          className="webview" 
          frameBorder="2"
        />
      </div>
    </div>
  );
};

export default WestApp;

