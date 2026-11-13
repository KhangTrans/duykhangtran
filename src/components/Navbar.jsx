import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Drawer, Space, Tooltip } from "antd";
import {
  MenuOutlined,
  CloseOutlined,
  BulbOutlined,
  BulbFilled,
  FilePdfOutlined,
  GlobalOutlined,
  SendOutlined,
} from "@ant-design/icons";

import { useLanguage } from "../context/useLanguage";

const NavContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${(props) =>
    props.scrolled
      ? props.isDarkMode
        ? "rgba(10, 14, 39, 0.85)"
        : "rgba(255, 255, 255, 0.85)"
      : "transparent"};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(14px)" : "none")};
  -webkit-backdrop-filter: ${(props) => (props.scrolled ? "blur(14px)" : "none")};
  border-bottom: 1px solid
    ${(props) =>
      props.scrolled
        ? props.isDarkMode
          ? "rgba(255, 255, 255, 0.08)"
          : "rgba(0, 0, 0, 0.06)"
        : "transparent"};
  box-shadow: ${(props) =>
    props.scrolled ? "0 4px 20px rgba(0, 0, 0, 0.08)" : "none"};
`;

const NavInner = styled.div`
  max-width: 1240px;
  height: 100%;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  cursor: pointer;
`;

const BrandLogo = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, #1890ff, #722ed1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing: -0.5px;
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.35);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.06) rotate(3deg);
  }
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;

  .name {
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: -0.3px;
    background: linear-gradient(135deg, #1890ff, #722ed1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .status-wrapper {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.72rem;
    color: ${(props) => (props.isDarkMode ? "#94a3b8" : "#64748b")};
    font-weight: 500;
  }

  .pulse-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 8px #10b981;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.4;
      transform: scale(0.85);
    }
  }

  @media (max-width: 480px) {
    .status-wrapper {
      display: none;
    }
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  padding: 8px 14px;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${(props) =>
    props.active
      ? "#1890ff"
      : props.isDarkMode
      ? "rgba(255, 255, 255, 0.8)"
      : "rgba(15, 23, 42, 0.75)"};
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #1890ff;
    background: ${(props) =>
      props.isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(24, 144, 255, 0.06)"};
  }

  ${(props) =>
    props.active &&
    `
    font-weight: 600;
    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 14px;
      right: 14px;
      height: 2px;
      background: #1890ff;
      border-radius: 2px;
    }
  `}
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ControlButton = styled.button`
  background: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.05)"};
  border: 1px solid
    ${(props) =>
      props.isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)"};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#1e293b")};
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.05rem;
  transition: all 0.2s ease;

  &:hover {
    background: #1890ff;
    border-color: #1890ff;
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

const LangButton = styled.button`
  background: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.05)"};
  border: 1px solid
    ${(props) =>
      props.isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)"};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#1e293b")};
  padding: 6px 12px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 0.88rem;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    border-color: #1890ff;
    color: #1890ff;
  }
`;

const MobileMenuBtn = styled.button`
  display: none;
  background: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.05)"};
  border: 1px solid
    ${(props) =>
      props.isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)"};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#1e293b")};
  width: 40px;
  height: 40px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.1rem;

  @media (max-width: 900px) {
    display: inline-flex;
  }
`;

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px 0;

  .drawer-link {
    font-size: 1.15rem;
    font-weight: 600;
    padding: 12px 16px;
    border-radius: 10px;
    color: ${(props) => (props.isDarkMode ? "#f1f5f9" : "#1e293b")};
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      background: ${(props) =>
        props.isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(24, 144, 255, 0.08)"};
      color: #1890ff;
    }
  }

  .divider {
    height: 1px;
    background: ${(props) =>
      props.isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)"};
    margin: 8px 0;
  }
`;

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["hero", "about", "experience", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "hero", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <NavContainer scrolled={scrolled} isDarkMode={isDarkMode}>
      <NavInner>
        <Brand onClick={() => scrollTo("hero")}>
          <BrandLogo>TK</BrandLogo>
          <BrandText isDarkMode={isDarkMode}>
            <span className="name">Duy Khang</span>
            <div className="status-wrapper">
              <span className="pulse-dot" />
              <span>{t.nav.available}</span>
            </div>
          </BrandText>
        </Brand>

        {/* Desktop Links */}
        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              active={activeSection === item.id}
              isDarkMode={isDarkMode}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>

        {/* Actions & Utilities */}
        <ActionsContainer>
          {/* Language Switcher */}
          <Tooltip title={lang === "vi" ? "Switch to English" : "Chuyển sang Tiếng Việt"}>
            <LangButton
              onClick={toggleLanguage}
              isDarkMode={isDarkMode}
              aria-label="Toggle language"
            >
              <GlobalOutlined />
              <span>{lang === "vi" ? "VI" : "EN"}</span>
            </LangButton>
          </Tooltip>

          {/* Theme Switcher */}
          <Tooltip title={isDarkMode ? "Light Mode" : "Dark Mode"}>
            <ControlButton
              onClick={toggleTheme}
              isDarkMode={isDarkMode}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <BulbFilled style={{ color: "#fbbf24" }} /> : <BulbOutlined />}
            </ControlButton>
          </Tooltip>

          {/* CV Button */}
          <Button
            type="primary"
            icon={<FilePdfOutlined />}
            href="/Tran-Duy-Khang-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontWeight: 600,
              borderRadius: "8px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              boxShadow: "0 4px 12px rgba(24, 144, 255, 0.3)",
            }}
          >
            {t.nav.cv}
          </Button>

          {/* Mobile Menu Button */}
          <MobileMenuBtn
            isDarkMode={isDarkMode}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <MenuOutlined />
          </MobileMenuBtn>
        </ActionsContainer>
      </NavInner>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <BrandLogo style={{ width: 34, height: 34, fontSize: "0.95rem" }}>TK</BrandLogo>
            <span style={{ fontWeight: 700 }}>Trần Duy Khang</span>
          </div>
        }
        placement="right"
        onClose={() => setMobileOpen(false)}
        open={mobileOpen}
        styles={{
          body: {
            padding: "16px 20px",
            background: isDarkMode ? "#0d1326" : "#ffffff",
          },
          header: {
            background: isDarkMode ? "#0d1326" : "#ffffff",
            borderBottom: isDarkMode
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.08)",
          },
        }}
      >
        <DrawerContent isDarkMode={isDarkMode}>
          {navItems.map((item) => (
            <a
              key={item.id}
              className="drawer-link"
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </a>
          ))}

          <div className="divider" />

          <Button
            type="primary"
            icon={<FilePdfOutlined />}
            href="/Tran-Duy-Khang-CV.pdf"
            target="_blank"
            size="large"
            block
            style={{ fontWeight: 600, height: "46px" }}
          >
            {t.hero.downloadCv}
          </Button>

          <Button
            icon={<GlobalOutlined />}
            size="large"
            block
            onClick={toggleLanguage}
            style={{ height: "46px", fontWeight: 600 }}
          >
            {lang === "vi" ? "Switch to English (EN)" : "Chuyển sang Tiếng Việt (VI)"}
          </Button>
        </DrawerContent>
      </Drawer>
    </NavContainer>
  );
};

export default Navbar;
