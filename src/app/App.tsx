import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { ThemeProvider } from './contexts/ThemeContext';
import { HomePage } from './pages/HomePage';
import { HooktheoryPage } from './pages/HooktheoryPage';
import { SoccerDiscoveryPage } from './pages/SoccerDiscoveryPage';
import { BleachPage } from './pages/BleachPage';
import { PaperTrailPage } from './pages/PaperTrailPage';
import { ProsperPage } from './pages/ProsperPage';

// Main App Component
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-white via-[#fafaf8] to-[#f5f4f1] dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#0f0e0d] dark:to-[#151412] transition-colors duration-300">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hooktheory" element={<HooktheoryPage />} />
            <Route path="/soccer" element={<Navigate to="/soccer-discovery" replace />} />
            <Route path="/overlap" element={<Navigate to="/soccer-discovery" replace />} />
            <Route path="/soccer-discovery" element={<SoccerDiscoveryPage />} />
            <Route path="/bleach-usa" element={<BleachPage />} />
            <Route path="/papertrail" element={<PaperTrailPage />} />
            <Route path="/prosper-xo" element={<ProsperPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
