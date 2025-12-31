import { useState } from "react";
import { ConfigProvider, theme, FloatButton, App as AntApp } from "antd";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import TetFlowers from "./components/TetFlowers";
import Fireworks from "./components/Fireworks";
import Welcome2026 from "./components/Welcome2026";
import ConfettiEffect from "./components/ConfettiEffect";
import CursorTrail from "./components/CursorTrail";
import ClickFireworks from "./components/ClickFireworks";
import "./styles/App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#1890ff",
          borderRadius: 8,
          fontSize: 16,
        },
      }}
    >
      <AntApp>
        <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
          {/* New Year Greeting */}
          <Welcome2026 />

          {/* Festive Effects */}
          <ConfettiEffect />
          <TetFlowers />
          <Fireworks />

          {/* Interactive Effects */}
          <CursorTrail />
          <ClickFireworks />

          {/* Main Content */}
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />

          {/* Theme Toggle Button */}
          <FloatButton
            icon={isDarkMode ? <BulbFilled /> : <BulbOutlined />}
            onClick={toggleTheme}
            tooltip={isDarkMode ? "Light Mode" : "Dark Mode"}
            style={{
              right: 24,
              bottom: 80,
            }}
          />

          {/* Back to Top Button */}
          <FloatButton.BackTop
            style={{
              right: 24,
              bottom: 24,
            }}
          />
        </div>
      </AntApp>
    </ConfigProvider>
  );
}

export default App;
