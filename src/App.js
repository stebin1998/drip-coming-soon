import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <video 
        className="background-video" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="coming-soon-container">
        <div className="logo-container">
          <img src="/logo2.png" alt="Logo" className="logo" />
        </div>
        <h1 className="coming-soon-title">coming soon</h1>
      </div>
    </div>
  );
}

export default App;
