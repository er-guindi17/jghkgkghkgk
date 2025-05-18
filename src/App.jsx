
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from '@/layouts/MainLayout.jsx';

// Pages
import HomePage from '@/pages/HomePage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import RulesPage from '@/pages/RulesPage.jsx';
import GalleryPage from '@/pages/GalleryPage.jsx';
import JoinPage from '@/pages/JoinPage.jsx';
import NotFoundPage from '@/pages/NotFoundPage.jsx';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="rules" element={<RulesPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
