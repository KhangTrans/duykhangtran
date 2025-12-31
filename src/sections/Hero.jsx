import { Button, Space, Row, Col } from "antd";
import { DownOutlined, MailOutlined, GithubOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import styled from "styled-components";
import profileImage from "../assets/khang.jpg";

const HeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-bottom: 80px;
  position: relative;
  overflow: hidden;
  width: 100%;

  /* Animated Background Elements */
  &::before {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(24, 144, 255, 0.1) 0%,
      transparent 70%
    );
    border-radius: 50%;
    top: -250px;
    right: -250px;
    animation: float 6s ease-in-out infinite;
  }

  &::after {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(114, 46, 209, 0.1) 0%,
      transparent 70%
    );
    border-radius: 50%;
    bottom: -200px;
    left: -200px;
    animation: float 8s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  width: 100%;
`;

const ProfileImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
  padding: 30px 0;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid transparent;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #1890ff, #722ed1) border-box;
  box-shadow: 0 20px 60px rgba(24, 144, 255, 0.3);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  animation: gentle-float 4s ease-in-out infinite;
  position: relative;

  @keyframes gentle-float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  &:hover {
    transform: translateY(-20px) scale(1.05);
    box-shadow: 0 30px 80px rgba(24, 144, 255, 0.5),
      0 0 50px rgba(114, 46, 209, 0.3);
    filter: brightness(1.1);
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const TextContent = styled.div`
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Greeting = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #1890ff;
  font-weight: 500;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #1890ff, #722ed1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.8rem;
  margin-bottom: 30px;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 40px;
  opacity: 0.8;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  opacity: 0.6;
  transition: opacity 0.3s;
  z-index: 10;

  &:hover {
    opacity: 1;
  }

  span {
    font-size: 0.9rem;
    text-align: center;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    bottom: 20px;

    span {
      font-size: 0.85rem;
    }

    svg {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    bottom: 15px;

    span {
      font-size: 0.8rem;
    }
  }
`;

const ButtonContainer = styled(motion.div)`
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-bottom: 50px;
    width: 100%;

    .ant-space {
      width: 100%;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      gap: 16px !important;
    }

    .ant-btn {
      height: 48px !important;
      font-size: 1rem !important;
      padding: 0 24px !important;
      width: 100% !important;
      max-width: 280px !important;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 40px;

    .ant-btn {
      height: 45px !important;
      font-size: 0.95rem !important;
      max-width: 260px !important;
    }
  }
`;

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroContainer>
      <HeroContent>
        <Row gutter={[48, 48]} align="middle">
          {/* Profile Image - Left Side */}
          <Col xs={24} md={10}>
            <ProfileImageContainer
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ProfileImage
                src={profileImage}
                alt="TRAN DUY KHANG"
                onError={(e) => {
                  // Fallback to a gradient background if image doesn't load
                  e.target.style.background =
                    "linear-gradient(135deg, #1890ff, #722ed1)";
                  e.target.style.border = "none";
                }}
              />
            </ProfileImageContainer>
          </Col>

          {/* Text Content - Right Side */}
          <Col xs={24} md={14}>
            <TextContent>
              <Greeting
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                👋 Hello, I'm
              </Greeting>

              <Name
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                TRAN DUY KHANG
              </Name>

              <Title
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Software Engineering Student | Frontend Developer
              </Title>

              <Description
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Passionate about creating beautiful, functional web
                applications. Currently studying at FPT University, Cần Thơ
                Campus, and building modern solutions with React, Node.js, and
                cutting-edge technologies.
              </Description>

              <ButtonContainer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Space size="large" wrap style={{ justifyContent: "center" }}>
                  <Button
                    type="primary"
                    size="large"
                    icon={<GithubOutlined />}
                    onClick={scrollToProjects}
                    style={{
                      height: "50px",
                      fontSize: "1.1rem",
                      padding: "0 30px",
                    }}
                  >
                    View Projects
                  </Button>
                  <Button
                    size="large"
                    icon={<MailOutlined />}
                    onClick={scrollToContact}
                    style={{
                      height: "50px",
                      fontSize: "1.1rem",
                      padding: "0 30px",
                    }}
                  >
                    Contact Me
                  </Button>
                </Space>
              </ButtonContainer>
            </TextContent>
          </Col>
        </Row>
      </HeroContent>

      <ScrollIndicator
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span>Scroll Down</span>
        <DownOutlined style={{ fontSize: "1.5rem" }} />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;
