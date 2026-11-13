import React, { useState } from "react";
import { Card, Row, Col, Typography, Tag, Button, Space, Radio } from "antd";
import {
  GithubOutlined,
  LinkOutlined,
  EyeOutlined,
  TeamOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useLanguage } from "../context/useLanguage";
import ProjectModal from "../components/ProjectModal";

const { Title, Paragraph } = Typography;

const ProjectsContainer = styled.section`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
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

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;

  .ant-radio-group {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    background: transparent;
    padding: 0;
  }

  .filter-btn {
    border-radius: 20px !important;
    padding: 6px 18px !important;
    height: auto !important;
    font-size: 0.92rem !important;
    font-weight: 500 !important;
    border: 1px solid rgba(24, 144, 255, 0.2) !important;
    background: rgba(24, 144, 255, 0.04) !important;
    color: inherit !important;
    transition: all 0.2s ease !important;

    &:hover {
      border-color: #1890ff !important;
      color: #1890ff !important;
    }

    &.active {
      background: linear-gradient(135deg, #1890ff, #722ed1) !important;
      border-color: transparent !important;
      color: #ffffff !important;
      font-weight: 600 !important;
      box-shadow: 0 4px 14px rgba(24, 144, 255, 0.35) !important;
    }
  }
`;

const ProjectCard = styled(Card)`
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(24, 144, 255, 0.15);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${(props) => props.gradient || "linear-gradient(90deg, #1890ff, #722ed1)"};
    opacity: 0.9;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(24, 144, 255, 0.18);
    border-color: #1890ff;
  }

  .ant-card-body {
    padding: 26px;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.35;
`;

const RoleTag = styled(Tag)`
  font-size: 0.85rem;
  padding: 4px 10px;
  border-radius: 6px;
  margin-bottom: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: none;
  background: rgba(114, 46, 209, 0.1);
  color: #722ed1;
  font-weight: 600;
`;

const ProjectDesc = styled(Paragraph)`
  font-size: 0.98rem;
  line-height: 1.6;
  opacity: 0.85;
  margin-bottom: 16px !important;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 18px 0;

  li {
    font-size: 0.9rem;
    line-height: 1.5;
    padding-left: 20px;
    position: relative;
    margin-bottom: 6px;

    &::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #10b981;
      font-weight: bold;
    }
  }
`;

const TechStackTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid rgba(24, 144, 255, 0.08);
`;

const ActionButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = [
    { key: "all", label: t.projects.filters.all },
    { key: "featured", label: t.projects.filters.featured },
    { key: "fullstack", label: t.projects.filters.fullstack },
    { key: "frontend", label: t.projects.filters.frontend },
  ];

  const projects = t.projects.items;

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <ProjectsContainer id="projects">
      <SectionHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle level={1}>{t.projects.title}</SectionTitle>
          <Subtitle>{t.projects.subtitle}</Subtitle>
        </motion.div>
      </SectionHeader>

      {/* Filter Tabs */}
      <FilterContainer>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              className={`filter-btn ${activeFilter === opt.key ? "active" : ""}`}
              onClick={() => setActiveFilter(opt.key)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </FilterContainer>

      {/* Projects Grid */}
      <Row gutter={[24, 24]}>
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <Col xs={24} lg={12} key={project.id}>
              <motion.div
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                style={{ height: "100%" }}
              >
                <ProjectCard gradient={project.gradient}>
                  <ProjectHeader>
                    <Tag color="blue" style={{ borderRadius: "4px" }}>
                      {project.badge}
                    </Tag>
                    {project.period && (
                      <span style={{ fontSize: "0.82rem", opacity: 0.7 }}>
                        <CalendarOutlined style={{ marginRight: 4 }} />
                        {project.period}
                      </span>
                    )}
                  </ProjectHeader>

                  <ProjectTitle>{project.title}</ProjectTitle>

                  <div>
                    <RoleTag>
                      <TeamOutlined />
                      <span>{project.role}</span>
                    </RoleTag>
                  </div>

                  <ProjectDesc>{project.description}</ProjectDesc>

                  <FeatureList>
                    {project.features?.slice(0, 3).map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </FeatureList>

                  <TechStackTags>
                    {project.techStack?.slice(0, 5).map((tech, idx) => (
                      <Tag
                        key={idx}
                        style={{
                          fontSize: "0.82rem",
                          borderRadius: "4px",
                          padding: "2px 8px",
                        }}
                      >
                        {tech}
                      </Tag>
                    ))}
                    {project.techStack?.length > 5 && (
                      <Tag style={{ fontSize: "0.82rem", borderRadius: "4px" }}>
                        +{project.techStack.length - 5}
                      </Tag>
                    )}
                  </TechStackTags>

                  <ActionButtons>
                    <Button
                      type="primary"
                      icon={<EyeOutlined />}
                      onClick={() => setSelectedProject(project)}
                    >
                      {t.projects.viewDetails}
                    </Button>

                    {project.demo && (
                      <Button
                        icon={<LinkOutlined />}
                        href={project.demo}
                        target="_blank"
                      >
                        {t.projects.liveDemo}
                      </Button>
                    )}

                    {typeof project.github === "string" && (
                      <Button
                        icon={<GithubOutlined />}
                        href={project.github}
                        target="_blank"
                      >
                        GitHub
                      </Button>
                    )}

                    {typeof project.github === "object" && project.github?.frontend && (
                      <Button
                        icon={<GithubOutlined />}
                        href={project.github.frontend}
                        target="_blank"
                      >
                        GitHub (Frontend)
                      </Button>
                    )}
                  </ActionButtons>
                </ProjectCard>
              </motion.div>
            </Col>
          ))}
        </AnimatePresence>
      </Row>

      {/* Deep Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </ProjectsContainer>
  );
};

export default Projects;
