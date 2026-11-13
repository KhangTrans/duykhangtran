import React from "react";
import { Button, Space, Row, Col, Tooltip } from "antd";
import {
  DownOutlined,
  MailOutlined,
  GithubOutlined,
  FilePdfOutlined,
  PhoneOutlined,
  SendOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si";
import { motion } from "framer-motion";
import styled from "styled-components";
import profileImage from "../assets/khang.jpg";
import { useLanguage } from "../context/useLanguage";

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 24px 60px;
  position: relative;
  overflow: hidden;
  width: 100%;

  /* Background Ambient Glows */
  &::before {
    content: "";
    position: absolute;
    width: 550px;
    height: 550px;
    background: radial-gradient(
      circle,
      rgba(24, 144, 255, 0.15) 0%,
      rgba(114, 46, 209, 0.05) 50%,
      transparent 70%
    );
    border-radius: 50%;
    top: -150px;
    right: -100px;
    filter: blur(40px);
    z-index: 0;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(114, 46, 209, 0.12) 0%,
      rgba(24, 144, 255, 0.04) 50%,
      transparent 70%
    );
    border-radius: 50%;
    bottom: -100px;
    left: -100px;
    filter: blur(40px);
    z-index: 0;
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  width: 100%;
`;

const ImageColWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ProfileFrame = styled(motion.div)`
  position: relative;
  width: 320px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin-bottom: 20px;
  }
`;

const ProfileGlow = styled.div`
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1890ff, #722ed1, #10b981);
  opacity: 0.7;
  filter: blur(18px);
  animation: spinGlow 10s linear infinite;

  @keyframes spinGlow {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ProfileImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.85);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  z-index: 2;
  background: #111;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const FloatingTechBadge = styled(motion.div)`
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.6);
  z-index: 3;
  color: ${(props) => props.color || "#1890ff"};

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.3rem;
  }
`;

const TextContent = styled.div`
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const StatusPill = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 30px;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #10b981;
  font-size: 0.86rem;
  font-weight: 600;
  margin-bottom: 18px;

  .pulse {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 10px #10b981;
    animation: pulseAnim 2s infinite;
  }

  @keyframes pulseAnim {
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
`;

const Greeting = styled(motion.div)`
  font-size: 1.25rem;
  font-weight: 500;
  color: #1890ff;
  margin-bottom: 8px;
`;

const Name = styled(motion.h1)`
  font-size: 3.8rem;
  line-height: 1.1;
  margin-bottom: 14px;
  font-weight: 800;
  letter-spacing: -1px;
  background: linear-gradient(135deg, #1890ff 0%, #722ed1 60%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 20px;
  line-height: 1.35;
  opacity: 0.92;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.08rem;
  line-height: 1.8;
  margin-bottom: 32px;
  opacity: 0.85;
  max-width: 620px;

  @media (max-width: 768px) {
    margin: 0 auto 30px auto;
  }
`;

const ButtonGroup = styled(motion.div)`
  margin-bottom: 40px;

  .ant-space {
    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
    }
  }

  .btn-hero {
    height: 48px;
    padding: 0 26px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 10px;
  }
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 15px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  padding: 16px 18px;
  background: rgba(24, 144, 255, 0.04);
  border: 1px solid rgba(24, 144, 255, 0.12);
  border-radius: 12px;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(24, 144, 255, 0.08);
    border-color: #1890ff;
  }

  .stat-num {
    font-size: 1.15rem;
    font-weight: 700;
    color: #1890ff;
    margin-bottom: 2px;
  }

  .stat-sub {
    font-size: 0.82rem;
    opacity: 0.75;
    line-height: 1.35;
  }
`;

const ScrollIndicator = styled(motion.div)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  opacity: 0.7;
  margin-top: 40px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }

  span {
    font-size: 0.85rem;
    font-weight: 500;
  }
`;

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id) => {
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

  return (
    <HeroContainer id="hero">
      <HeroContent>
        <Row gutter={[48, 48]} align="middle">
          {/* Left Column: Profile Photo + Floating Tech Badges */}
          <Col xs={24} md={10}>
            <ImageColWrapper>
              <ProfileFrame
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <ProfileGlow />
                <ProfileImg
                  src={profileImage}
                  alt="Trần Duy Khang"
                  onError={(e) => {
                    e.target.style.background =
                      "linear-gradient(135deg, #1890ff, #722ed1)";
                  }}
                />

                {/* Floating Tech Badges */}
                <FloatingTechBadge
                  color="#61dafb"
                  style={{ top: "0%", left: "5%" }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <SiReact />
                </FloatingTechBadge>

                <FloatingTechBadge
                  color="#000000"
                  style={{ top: "15%", right: "-5%" }}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <SiNextdotjs />
                </FloatingTechBadge>

                <FloatingTechBadge
                  color="#3178c6"
                  style={{ bottom: "8%", left: "0%" }}
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <SiTypescript />
                </FloatingTechBadge>

                <FloatingTechBadge
                  color="#339933"
                  style={{ bottom: "2%", right: "8%" }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >
                  <SiNodedotjs />
                </FloatingTechBadge>
              </ProfileFrame>
            </ImageColWrapper>
          </Col>

          {/* Right Column: Text & Badges & Actions */}
          <Col xs={24} md={14}>
            <TextContent>
              <StatusPill
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="pulse" />
                <span>{t.hero.badge}</span>
              </StatusPill>

              <Greeting
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {t.hero.greeting}
              </Greeting>

              <Name
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {t.hero.name}
              </Name>

              <Subtitle
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {t.hero.title}
              </Subtitle>

              <Description
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                {t.hero.description}
              </Description>

              <ButtonGroup
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <Space size="middle" wrap>
                  <Button
                    type="primary"
                    className="btn-hero"
                    icon={<SendOutlined />}
                    onClick={() => scrollToSection("projects")}
                    style={{
                      boxShadow: "0 6px 20px rgba(24, 144, 255, 0.4)",
                    }}
                  >
                    {t.hero.viewProjects}
                  </Button>

                  <Button
                    className="btn-hero"
                    icon={<MailOutlined />}
                    onClick={() => scrollToSection("contact")}
                  >
                    {t.hero.contactMe}
                  </Button>

                  <Button
                    className="btn-hero"
                    icon={<FilePdfOutlined />}
                    href="/Tran-Duy-Khang-CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      borderColor: "#722ed1",
                      color: "#722ed1",
                    }}
                  >
                    {t.hero.downloadCv}
                  </Button>
                </Space>
              </ButtonGroup>

              {/* Quick Stats Grid */}
              <StatsGrid
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <StatCard>
                  <div className="stat-num">{t.hero.statGpa}</div>
                  <div className="stat-sub">{t.hero.statGpaSub}</div>
                </StatCard>
                <StatCard>
                  <div className="stat-num">{t.hero.statExp}</div>
                  <div className="stat-sub">{t.hero.statExpSub}</div>
                </StatCard>
                <StatCard>
                  <div className="stat-num">{t.hero.statLead}</div>
                  <div className="stat-sub">{t.hero.statLeadSub}</div>
                </StatCard>
                <StatCard>
                  <div className="stat-num">{t.hero.statTech}</div>
                  <div className="stat-sub">{t.hero.statTechSub}</div>
                </StatCard>
              </StatsGrid>
            </TextContent>
          </Col>
        </Row>
      </HeroContent>

      <ScrollIndicator
        onClick={() => scrollToSection("about")}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>{t.hero.scrollDown}</span>
        <DownOutlined style={{ fontSize: "1.2rem", color: "#1890ff" }} />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;
