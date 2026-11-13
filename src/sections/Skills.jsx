import React from "react";
import styled from "styled-components";
import { Typography, Row, Col, Card, Tag, Radio } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import {
  CodeOutlined,
  CloudServerOutlined,
  DatabaseOutlined,
  ThunderboltOutlined,
  ToolOutlined,
  TeamOutlined,
  RobotOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiAntdesign,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiPrisma,
  SiSocketdotio,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiFigma,
  SiVite,
  SiVercel,
  SiFlutter,
} from "react-icons/si";
import { useLanguage } from "../context/useLanguage";

const { Title, Paragraph } = Typography;

const SkillsContainer = styled.section`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
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

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 24px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled(Card)`
  border-radius: 16px;
  border: 1px solid rgba(24, 144, 255, 0.12);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 30px rgba(24, 144, 255, 0.15);
    border-color: #1890ff;
  }

  .ant-card-body {
    padding: 24px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(24, 144, 255, 0.1);

  .header-icon {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: ${(props) => props.bg || "rgba(24, 144, 255, 0.1)"};
    color: ${(props) => props.color || "#1890ff"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
  }

  h3 {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 700;
  }
`;

const SkillPillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (max-width: 380px) {
    grid-template-columns: 1fr;
  }
`;

const SkillPill = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  background: rgba(24, 144, 255, 0.04);
  border: 1px solid rgba(24, 144, 255, 0.08);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(24, 144, 255, 0.1);
    border-color: #1890ff;
    transform: translateX(3px);
  }

  .pill-icon {
    font-size: 1.35rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.color || "#1890ff"};
  }

  .pill-info {
    display: flex;
    flex-direction: column;

    .name {
      font-size: 0.9rem;
      font-weight: 600;
      line-height: 1.2;
    }

    .desc {
      font-size: 0.72rem;
      opacity: 0.7;
    }
  }
`;

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t.skills.categories.frontend,
      icon: <CodeOutlined />,
      color: "#0284c7",
      bg: "rgba(2, 132, 199, 0.1)",
      skills: [
        { name: "React 19 / ReactJS", desc: "Hooks, Context, SPA", icon: SiReact, color: "#61dafb" },
        { name: "Next.js", desc: "App Router, SSR, SEO", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", desc: "Type Safety & Generics", icon: SiTypescript, color: "#3178c6" },
        { name: "JavaScript", desc: "ES6+, Async/Await", icon: SiJavascript, color: "#f7df1e" },
        { name: "React Native", desc: "Cross-platform Mobile", icon: SiReact, color: "#61dafb" },
        { name: "Flutter", desc: "Mobile UI Framework", icon: SiFlutter, color: "#02569b" },
        { name: "Tailwind CSS", desc: "Utility-first Styling", icon: SiTailwindcss, color: "#06b6d4" },
        { name: "Ant Design", desc: "Enterprise UI Suite", icon: SiAntdesign, color: "#1677ff" },
        { name: "HTML5 & CSS3", desc: "Responsive & Semantic", icon: SiHtml5, color: "#e34f26" },
      ],
    },
    {
      title: t.skills.categories.backend,
      icon: <CloudServerOutlined />,
      color: "#10b981",
      bg: "rgba(16, 185, 129, 0.1)",
      skills: [
        { name: "Node.js", desc: "Event-driven runtime", icon: SiNodedotjs, color: "#339933" },
        { name: "NestJS", desc: "Enterprise Architecture", icon: SiNestjs, color: "#ea2845" },
        { name: "Express.js", desc: "RESTful Web APIs", icon: SiExpress, color: "#000000" },
        { name: "Prisma ORM", desc: "Type-safe DB Client", icon: SiPrisma, color: "#2d3748" },
        { name: "Socket.io", desc: "Real-time Messaging", icon: SiSocketdotio, color: "#010101" },
        { name: "RESTful APIs", desc: "Clean CRUD Design", icon: CodeOutlined, color: "#10b981" },
      ],
    },
    {
      title: t.skills.categories.database,
      icon: <DatabaseOutlined />,
      color: "#8b5cf6",
      bg: "rgba(139, 92, 246, 0.1)",
      skills: [
        { name: "PostgreSQL", desc: "Relational 20+ entities", icon: SiPostgresql, color: "#4169e1" },
        { name: "Redis", desc: "In-memory Caching", icon: SiRedis, color: "#dc382d" },
        { name: "MongoDB", desc: "NoSQL & Mongoose", icon: SiMongodb, color: "#47a248" },
        { name: "MySQL", desc: "RDBMS & Normalization", icon: SiMysql, color: "#4479a1" },
      ],
    },
    {
      title: t.skills.categories.aiPayment,
      icon: <ThunderboltOutlined />,
      color: "#f59e0b",
      bg: "rgba(245, 158, 11, 0.1)",
      skills: [
        { name: "Google Gemini AI", desc: "AI Roadmap & Prompts", icon: RobotOutlined, color: "#1a73e8" },
        { name: "YOLOv8 AI", desc: "Vision & Check-in", icon: RobotOutlined, color: "#00b4d8" },
        { name: "PayOS Payment", desc: "Idempotent Webhooks", icon: CreditCardOutlined, color: "#0088ff" },
        { name: "VNPay / ZaloPay", desc: "Sandbox Integration", icon: CreditCardOutlined, color: "#00b900" },
      ],
    },
    {
      title: t.skills.categories.tools,
      icon: <ToolOutlined />,
      color: "#ec4899",
      bg: "rgba(236, 72, 153, 0.1)",
      skills: [
        { name: "Git", desc: "Branching & Merging", icon: SiGit, color: "#f05032" },
        { name: "GitHub", desc: "PRs, Actions & Teams", icon: SiGithub, color: "#181717" },
        { name: "GitLab", desc: "Enterprise Pipelines", icon: SiGitlab, color: "#fc6d26" },
        { name: "Postman", desc: "API Mock & Testing", icon: SiPostman, color: "#ff6c37" },
        { name: "Figma", desc: "UI/UX Prototyping", icon: SiFigma, color: "#f24e1e" },
        { name: "Vite & Vercel", desc: "Build & Fast Deploy", icon: SiVite, color: "#646cff" },
      ],
    },
    {
      title: t.skills.categories.soft,
      icon: <TeamOutlined />,
      color: "#06b6d4",
      bg: "rgba(6, 182, 212, 0.1)",
      skills: [
        { name: "Team Leadership", desc: "5-6 member teams", icon: TeamOutlined, color: "#0284c7" },
        { name: "Agile / Scrum", desc: "Sprints & Standups", icon: CodeOutlined, color: "#10b981" },
        { name: "UI/UX Sense", desc: "Photography-tuned Eye", icon: ThunderboltOutlined, color: "#722ed1" },
        { name: "Tech Docs", desc: "SRS, SDD, UML, ERD", icon: ToolOutlined, color: "#f59e0b" },
      ],
    },
  ];

  return (
    <SkillsContainer id="skills">
      <SectionHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle level={1}>{t.skills.title}</SectionTitle>
          <Subtitle>{t.skills.subtitle}</Subtitle>
        </motion.div>
      </SectionHeader>

      <CategoryGrid>
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CategoryCard>
              <CardHeader color={category.color} bg={category.bg}>
                <div className="header-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </CardHeader>

              <SkillPillGrid>
                {category.skills.map((skill, sIdx) => {
                  const IconComp = skill.icon;
                  return (
                    <SkillPill key={sIdx} color={skill.color}>
                      <div className="pill-icon">
                        <IconComp />
                      </div>
                      <div className="pill-info">
                        <span className="name">{skill.name}</span>
                        <span className="desc">{skill.desc}</span>
                      </div>
                    </SkillPill>
                  );
                })}
              </SkillPillGrid>
            </CategoryCard>
          </motion.div>
        ))}
      </CategoryGrid>
    </SkillsContainer>
  );
};

export default Skills;
