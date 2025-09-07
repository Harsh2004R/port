import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import Navbar from './components/Navbar';

// Lazy load sections for better performance
const Hero = lazy(() => import('./sections/Hero'));
const Expertise = lazy(() => import('./sections/Expertise'));
const Work = lazy(() => import('./sections/Work'));
const Experience = lazy(() => import('./sections/Experience'));
const Contact = lazy(() => import('./sections/Contact'));

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
          <Navbar />
          
          <main>
            <Suspense fallback={<LoadingSpinner size="xl" className="min-h-screen" />}>
              <Hero />
              <Expertise />
              <Work />
              <Experience />
              <Contact />
            </Suspense>
          </main>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
