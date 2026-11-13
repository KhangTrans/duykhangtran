import { useState } from "react";
import { ConfigProvider, theme, FloatButton, App as AntApp } from "antd";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "./styles/App.css";

function AppContent({ isDarkMode, toggleTheme }) {
  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      {/* Top Glassmorphic Navigation Bar */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* Quick Theme Switcher Float Button */}
      <FloatButton
        icon={isDarkMode ? <BulbFilled style={{ color: "#fbbf24" }} /> : <BulbOutlined />}
        onClick={toggleTheme}
        tooltip={isDarkMode ? "Light Mode" : "Dark Mode"}
        style={{
          right: 24,
          bottom: 84,
          zIndex: 999,
        }}
      />

      {/* Back to Top Button */}
      <FloatButton.BackTop
        style={{
          right: 24,
          bottom: 24,
          zIndex: 999,
        }}
      />
    </div>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("portfolio_theme");
    return saved !== null ? saved === "dark" : true;
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("portfolio_theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#1890ff",
          borderRadius: 10,
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          colorBgContainer: isDarkMode ? "#0f172a" : "#ffffff",
          colorBorder: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "#e2e8f0",
        },
      }}
    >
      <AntApp>
        <LanguageProvider>
          <AppContent isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </LanguageProvider>
      </AntApp>
    </ConfigProvider>
  );
}

export default App;
