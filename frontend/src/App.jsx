import React, { Suspense, lazy, useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSpinner from "./components/LoadingSpinner";
import Navbar from "./components/Navbar";
import axios from "axios";
import { API_BASE_URL } from "./utils/base-url/index.js";

// Lazy load sections for better performance
const Hero = lazy(() => import("./sections/Hero"));
const Expertise = lazy(() => import("./sections/Expertise"));
const Work = lazy(() => import("./sections/Work"));
const Experience = lazy(() => import("./sections/Experience"));
const Contact = lazy(() => import("./sections/Contact"));

function App() {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState({});
  const ping = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/v1/ping`, {
        method: "get",
        headers: { "Content-Type": "application/json" },
      });
      setData(res.data);
      if (data) setLoad(false);
    } catch (error) {
      setLoad(false);
    }
  };

  useEffect(() => {
    ping();
  }, []);


  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
          <Navbar />

          <main>
            <Suspense
              fallback={<LoadingSpinner size="xl" className="min-h-screen" />}
            >
              <Hero />
              <Expertise />
              <Work />
              <Experience />
              <Contact load={load} data={data} />
            </Suspense>
          </main>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
