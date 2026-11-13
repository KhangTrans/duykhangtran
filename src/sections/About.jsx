import React from "react";
import { Card, Row, Col, Typography, Tag, Space, Divider } from "antd";
import {
  BookOutlined,
  RocketOutlined,
  GlobalOutlined,
  CameraOutlined,
  HeartOutlined,
  SafetyCertificateOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useLanguage } from "../context/useLanguage";

const { Title, Paragraph, Text } = Typography;

const AboutContainer = styled.section`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const SectionTitle = styled(Title)`
  font-size: 2.8rem !important;
  margin-bottom: 12px !important;
  background: linear-gradient(135deg, #1890ff 0%, #722ed1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.2rem !important;
  }
`;

const Subtitle = styled(Paragraph)`
  font-size: 1.15rem;
  max-width: 680px;
  margin: 0 auto !important;
  opacity: 0.8;
  line-height: 1.6;
`;

const StyledCard = styled(Card)`
  height: 100%;
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(24, 144, 255, 0.12);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 36px rgba(24, 144, 255, 0.15);
    border-color: #1890ff;
  }

  .ant-card-body {
    padding: 28px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const BioCard = styled(Card)`
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(24, 144, 255, 0.15);
  height: 100%;

  .ant-card-body {
    padding: 32px;
  }
`;

const IconHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  .icon-box {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: ${(props) => props.bg || "rgba(24, 144, 255, 0.1)"};
    color: ${(props) => props.color || "#1890ff"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
  }

  h4 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

const LanguageBadgeRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 12px;

  .lang-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.95rem;

    .bullet {
      color: #1890ff;
      font-size: 1rem;
    }
  }
`;

const HighlightBox = styled.div`
  padding: 16px 20px;
  background: rgba(114, 46, 209, 0.06);
  border-left: 4px solid #722ed1;
  border-radius: 0 10px 10px 0;
  margin: 18px 0;
  font-size: 1rem;
  line-height: 1.6;
`;

const About = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <AboutContainer id="about">
      <SectionHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle level={1}>{t.about.title}</SectionTitle>
          <Subtitle>{t.about.subtitle}</Subtitle>
        </motion.div>
      </SectionHeader>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <Row gutter={[24, 24]}>
          {/* Left Column: Personal Story & Philosophy */}
          <Col xs={24} lg={13}>
            <motion.div variants={itemVariants} style={{ height: "100%" }}>
              <BioCard>
                <IconHeader color="#1890ff" bg="rgba(24, 144, 255, 0.1)">
                  <div className="icon-box">
                    <RocketOutlined />
                  </div>
                  <Title level={4}>Trần Duy Khang</Title>
                </IconHeader>

                <Paragraph style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                  {t.about.bio1.split("**").map((chunk, i) =>
                    i % 2 === 1 ? <strong key={i}>{chunk}</strong> : chunk
                  )}
                </Paragraph>

                <HighlightBox>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <CameraOutlined style={{ fontSize: "1.4rem", color: "#722ed1", marginTop: "3px" }} />
                    <div>
                      {t.about.bio2.split("**").map((chunk, i) =>
                        i % 2 === 1 ? <strong key={i}>{chunk}</strong> : chunk
                      )}
                    </div>
                  </div>
                </HighlightBox>

                <Paragraph style={{ fontSize: "1.05rem", lineHeight: "1.8", margin: 0 }}>
                  {t.about.bio3.split("**").map((chunk, i) =>
                    i % 2 === 1 ? <strong key={i}>{chunk}</strong> : chunk
                  )}
                </Paragraph>
              </BioCard>
            </motion.div>
          </Col>

          {/* Right Column: Education, Objectives, Languages, Passions */}
          <Col xs={24} lg={11}>
            <Row gutter={[20, 20]}>
              {/* Education Card */}
              <Col xs={24}>
                <motion.div variants={itemVariants}>
                  <StyledCard>
                    <IconHeader color="#10b981" bg="rgba(16, 185, 129, 0.1)">
                      <div className="icon-box">
                        <BookOutlined />
                      </div>
                      <Title level={4}>{t.about.educationTitle}</Title>
                    </IconHeader>
                    <Paragraph style={{ fontSize: "1rem", lineHeight: "1.6", margin: 0 }}>
                      <strong>{t.about.educationDesc}</strong>
                      <br />
                      {t.about.educationMajor}
                      <br />
                      <Tag color="green" style={{ marginTop: 8, fontSize: "0.9rem", padding: "3px 10px", borderRadius: "6px" }}>
                        🏆 {t.about.educationGpa}
                      </Tag>
                    </Paragraph>
                  </StyledCard>
                </motion.div>
              </Col>

              {/* Career Objective */}
              <Col xs={24}>
                <motion.div variants={itemVariants}>
                  <StyledCard>
                    <IconHeader color="#722ed1" bg="rgba(114, 46, 209, 0.1)">
                      <div className="icon-box">
                        <SafetyCertificateOutlined />
                      </div>
                      <Title level={4}>{t.about.objectiveTitle}</Title>
                    </IconHeader>
                    <Paragraph style={{ fontSize: "0.98rem", lineHeight: "1.6", marginBottom: "8px" }}>
                      {t.about.objectiveShort.split("**").map((chunk, i) =>
                        i % 2 === 1 ? <strong key={i}>{chunk}</strong> : chunk
                      )}
                    </Paragraph>
                    <Paragraph style={{ fontSize: "0.98rem", lineHeight: "1.6", margin: 0 }}>
                      {t.about.objectiveLong.split("**").map((chunk, i) =>
                        i % 2 === 1 ? <strong key={i}>{chunk}</strong> : chunk
                      )}
                    </Paragraph>
                  </StyledCard>
                </motion.div>
              </Col>

              {/* Languages & Interests in 2 small cards */}
              <Col xs={24} sm={12}>
                <motion.div variants={itemVariants}>
                  <StyledCard>
                    <IconHeader color="#f59e0b" bg="rgba(245, 158, 11, 0.1)">
                      <div className="icon-box">
                        <GlobalOutlined />
                      </div>
                      <Title level={4} style={{ fontSize: "1.1rem" }}>
                        {t.about.languagesTitle}
                      </Title>
                    </IconHeader>
                    <LanguageBadgeRow>
                      <div className="lang-item">
                        <span className="bullet">✓</span>
                        <span>{t.about.langVi}</span>
                      </div>
                      <div className="lang-item">
                        <span className="bullet">✓</span>
                        <span>{t.about.langEn}</span>
                      </div>
                      <div className="lang-item">
                        <span className="bullet">✓</span>
                        <span>{t.about.langJa}</span>
                      </div>
                    </LanguageBadgeRow>
                  </StyledCard>
                </motion.div>
              </Col>

              <Col xs={24} sm={12}>
                <motion.div variants={itemVariants}>
                  <StyledCard>
                    <IconHeader color="#ec4899" bg="rgba(236, 72, 153, 0.1)">
                      <div className="icon-box">
                        <HeartOutlined />
                      </div>
                      <Title level={4} style={{ fontSize: "1.1rem" }}>
                        {t.about.interestsTitle}
                      </Title>
                    </IconHeader>
                    <Paragraph style={{ fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                      {t.about.interestsDesc}
                    </Paragraph>
                  </StyledCard>
                </motion.div>
              </Col>
            </Row>
          </Col>
        </Row>
      </motion.div>
    </AboutContainer>
  );
};

export default About;
