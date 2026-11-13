import React from "react";
import styled from "styled-components";
import { Typography, Tag, Card, Row, Col } from "antd";
import {
  BankOutlined,
  ProjectOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  CheckCircleTwoTone,
  CheckCircleOutlined,
  TrophyOutlined,
  RocketOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { useLanguage } from "../context/useLanguage";

const { Title, Paragraph, Text } = Typography;

const ExperienceContainer = styled.section`
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

const TimelineWrapper = styled.div`
  position: relative;
  margin-top: 40px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 28px;
    width: 2px;
    background: linear-gradient(
      180deg,
      #1890ff 0%,
      #722ed1 50%,
      rgba(24, 144, 255, 0.1) 100%
    );

    @media (min-width: 900px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: ${(props) => (props.alignRight ? "row-reverse" : "row")};
    align-items: flex-start;
  }
`;

const TimelineNode = styled.div`
  position: absolute;
  left: 14px;
  top: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${(props) => props.color || "#1890ff"};
  border: 4px solid ${(props) => props.borderColor || "#ffffff"};
  box-shadow: 0 0 0 3px ${(props) => props.glowColor || "rgba(24, 144, 255, 0.25)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.85rem;
  z-index: 2;

  @media (min-width: 900px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

const TimelineContent = styled.div`
  margin-left: 60px;
  width: calc(100% - 60px);

  @media (min-width: 900px) {
    margin-left: 0;
    width: 45%;
  }
`;

const ExperienceCard = styled(Card)`
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(24, 144, 255, 0.15);
  overflow: hidden;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(24, 144, 255, 0.15);
    border-color: #1890ff;
  }

  .ant-card-body {
    padding: 28px;
  }
`;

const PeriodBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  background: ${(props) => props.bg || "rgba(24, 144, 255, 0.1)"};
  color: ${(props) => props.color || "#1890ff"};
  margin-bottom: 12px;
`;

const RoleTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 4px;
`;

const CompanyName = styled.h4`
  font-size: 1.05rem;
  font-weight: 600;
  color: #1890ff;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const LocationText = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.85rem;
  color: #8c8c8c;
  margin-left: 10px;
`;

const ProjectHighlight = styled.div`
  font-weight: 600;
  font-size: 0.98rem;
  margin-bottom: 12px;
  padding: 8px 12px;
  border-left: 3px solid #1890ff;
  background: rgba(24, 144, 255, 0.05);
  border-radius: 0 8px 8px 0;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 14px 0 18px 0;

  li {
    position: relative;
    padding-left: 22px;
    margin-bottom: 8px;
    font-size: 0.95rem;
    line-height: 1.6;

    &::before {
      content: "•";
      position: absolute;
      left: 6px;
      top: -1px;
      color: #1890ff;
      font-size: 1.2rem;
    }
  }
`;

const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
`;

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      period: t.experience.roles.omnigym.period,
      company: t.experience.roles.omnigym.company,
      role: t.experience.roles.omnigym.role,
      location: t.experience.roles.omnigym.location,
      project: t.experience.roles.omnigym.project,
      bullets: t.experience.roles.omnigym.bullets,
      tags: t.experience.roles.omnigym.tags,
      icon: <RocketOutlined />,
      color: "#6366f1",
      glowColor: "rgba(99, 102, 241, 0.3)",
      alignRight: false,
    },
    {
      period: t.experience.roles.rikkei.period,
      company: t.experience.roles.rikkei.company,
      role: t.experience.roles.rikkei.role,
      location: t.experience.roles.rikkei.location,
      project: t.experience.roles.rikkei.project,
      bullets: t.experience.roles.rikkei.bullets,
      tags: t.experience.roles.rikkei.tags,
      icon: <ApartmentOutlined />,
      color: "#f59e0b",
      glowColor: "rgba(245, 158, 11, 0.3)",
      alignRight: true,
    },
    {
      period: t.experience.roles.fpt.period,
      company: t.experience.roles.fpt.company,
      role: t.experience.roles.fpt.role,
      location: t.experience.roles.fpt.location,
      project: t.experience.roles.fpt.project,
      bullets: t.experience.roles.fpt.bullets,
      tags: t.experience.roles.fpt.tags,
      icon: <BankOutlined />,
      color: "#10b981",
      glowColor: "rgba(16, 185, 129, 0.3)",
      alignRight: false,
    },
  ];

  return (
    <ExperienceContainer id="experience">
      <SectionHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle level={1}>{t.experience.title}</SectionTitle>
          <Subtitle>{t.experience.subtitle}</Subtitle>
        </motion.div>
      </SectionHeader>

      <TimelineWrapper>
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            alignRight={exp.alignRight}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <TimelineNode
              color={exp.color}
              glowColor={exp.glowColor}
            >
              {exp.icon}
            </TimelineNode>

            <TimelineContent>
              <ExperienceCard>
                <PeriodBadge bg={`${exp.color}15`} color={exp.color}>
                  <CalendarOutlined />
                  <span>{exp.period}</span>
                </PeriodBadge>

                <RoleTitle>{exp.role}</RoleTitle>

                <CompanyName>
                  <span>{exp.company}</span>
                  <LocationText>
                    <EnvironmentOutlined />
                    <span>{exp.location}</span>
                  </LocationText>
                </CompanyName>

                <ProjectHighlight>{exp.project}</ProjectHighlight>

                <BulletList>
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </BulletList>

                <TagsRow>
                  {exp.tags.map((tag, idx) => (
                    <Tag
                      key={idx}
                      color="blue"
                      style={{
                        padding: "3px 10px",
                        borderRadius: "6px",
                        fontSize: "0.85rem",
                      }}
                    >
                      {tag}
                    </Tag>
                  ))}
                </TagsRow>
              </ExperienceCard>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineWrapper>
    </ExperienceContainer>
  );
};

export default Experience;
