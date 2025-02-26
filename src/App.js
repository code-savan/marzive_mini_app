// web/src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import MobileNav from './components/MobileNav';

// Import pages
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

import './App.css';

function App() {
  // State to handle the loading screen visibility
  const [loading, setLoading] = useState(true);

  // Simulate app initialization (could be replaced with actual auth or API calls)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds simulated delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Show loading screen if app is still loading */}
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="app-container">
          {/* Main content area */}
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
              <Route path="/page4" element={<Page4 />} />
            </Routes>
          </div>
          {/* Fixed mobile navigation visible on all pages */}
          <MobileNav />
        </div>
      )}
    </Router>
  );
}

export default App;
