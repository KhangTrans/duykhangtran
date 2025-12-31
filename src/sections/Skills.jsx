import { Card, Row, Col, Typography } from "antd";
import { CodeOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import styled from "styled-components";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJavascript,
} from "react-icons/si";

const { Title } = Typography;

const SkillsContainer = styled.section`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(Title)`
  text-align: center;
  margin-bottom: 60px !important;
  font-size: 3rem !important;
  background: linear-gradient(135deg, #1890ff, #722ed1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem !important;
  }
`;

const SkillCard = styled(Card)`
  height: 100%;
  text-align: center;
  transition: all 0.3s ease;
  border-radius: 12px;

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 12px 24px rgba(24, 144, 255, 0.3);
  }
`;

const IconWrapper = styled.div`
  font-size: 4rem;
  margin-bottom: 15px;
  color: ${(props) => props.color || "#1890ff"};
  display: flex;
  justify-content: center;
  align-items: center;

  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
  font-weight: 600;
`;

const CategoryTitle = styled(Title)`
  margin: 40px 0 30px 0 !important;
  font-size: 1.8rem !important;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #1890ff, #722ed1);
    border-radius: 2px;
  }
`;

// Custom text-based icon component
const TextIcon = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  font-family: "Courier New", monospace;
  color: ${(props) => props.color || "#1890ff"};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${(props) => (props.color ? `${props.color}20` : "#1890ff20")};
  border-radius: 8px;
  flex-shrink: 0;
`;

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const programmingSkills = [
    { name: "C", text: "C", color: "#A8B9CC" },
    { name: "Java", text: "J", color: "#007396" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
    { name: "React Native", icon: SiReact, color: "#61DAFB" },
    { name: "NodeJS", icon: SiNodedotjs, color: "#339933" },
    { name: "ExpressJS", icon: SiExpress, color: "#000000" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  ];

  const versionControlSkills = [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "GitLab", icon: SiGitlab, color: "#FCA121" },
  ];

  return (
    <SkillsContainer id="skills">
      <SectionTitle level={1}>Skills & Technologies</SectionTitle>

      {/* Programming Languages & Technologies */}
      <CategoryTitle level={2}>
        Programming Languages & Technologies
      </CategoryTitle>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <Row gutter={[24, 24]}>
          {programmingSkills.map((skill, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <motion.div variants={itemVariants}>
                <SkillCard>
                  {skill.icon ? (
                    <IconWrapper color={skill.color}>
                      <skill.icon />
                    </IconWrapper>
                  ) : (
                    <IconWrapper color={skill.color}>
                      <TextIcon color={skill.color}>{skill.text}</TextIcon>
                    </IconWrapper>
                  )}
                  <SkillName>{skill.name}</SkillName>
                </SkillCard>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>

      {/* Version Control */}
      <CategoryTitle level={2}>Version Control</CategoryTitle>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <Row gutter={[24, 24]}>
          {versionControlSkills.map((skill, index) => (
            <Col xs={24} sm={8} key={index}>
              <motion.div variants={itemVariants}>
                <SkillCard>
                  <IconWrapper color={skill.color}>
                    <skill.icon />
                  </IconWrapper>
                  <SkillName>{skill.name}</SkillName>
                </SkillCard>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </SkillsContainer>
  );
};

export default Skills;
