import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Layout from './components/Layout';

// Import pages
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';
import ApiDataPage from './pages/ApiDataPage';
import AboutPage from './pages/AboutPage';

/**
 * App Content Component - Separated to use theme context
 */
function AppContent() {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <Router>
      <Layout onThemeToggle={toggleTheme} isDarkMode={isDarkMode}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/api-data" element={<ApiDataPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

/**
 * 404 Not Found Page Component
 */
function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Go back home
        </a>
      </div>
    </div>
  );
}

/**
 * Main App Component
 */
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App; 