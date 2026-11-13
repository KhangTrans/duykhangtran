import React from "react";
import { Modal, Tag, Button, Space, Divider, Typography } from "antd";
import {
  GithubOutlined,
  LinkOutlined,
  CheckCircleOutlined,
  TeamOutlined,
  CalendarOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { useLanguage } from "../context/useLanguage";

const { Title, Paragraph, Text } = Typography;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  padding: 16px;
  background: rgba(24, 144, 255, 0.05);
  border: 1px solid rgba(24, 144, 255, 0.15);
  border-radius: 10px;
  margin: 16px 0;

  .meta-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.92rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin: 14px 0;

  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 0.95rem;
    line-height: 1.5;

    .icon {
      color: #10b981;
      margin-top: 3px;
      flex-shrink: 0;
    }
  }
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const ProjectModal = ({ project, open, onClose }) => {
  const { t } = useLanguage();

  if (!project) return null;

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          {t.projects.close}
        </Button>,
        project.demo && (
          <Button
            key="demo"
            type="primary"
            icon={<LinkOutlined />}
            href={project.demo}
            target="_blank"
          >
            {t.projects.liveDemo}
          </Button>
        ),
      ]}
      width={720}
      centered
      destroyOnClose
    >
      <ModalHeader>
        <BadgeRow>
          <Tag color="blue">{project.badge}</Tag>
          {project.period && (
            <Tag icon={<CalendarOutlined />} color="default">
              {project.period}
            </Tag>
          )}
        </BadgeRow>
        <Title level={3} style={{ margin: "6px 0 0" }}>
          {project.title}
        </Title>
      </ModalHeader>

      <MetaGrid>
        <div className="meta-item">
          <TeamOutlined style={{ color: "#1890ff" }} />
          <span>
            <strong>{t.projects.roleLabel}</strong> {project.role}
          </span>
        </div>
        <div className="meta-item">
          <SafetyCertificateOutlined style={{ color: "#722ed1" }} />
          <span>
            <strong>{t.projects.teamSizeLabel}</strong> {project.teamSize || "5-6 thành viên"}
          </span>
        </div>
      </MetaGrid>

      <Paragraph style={{ fontSize: "1.02rem", lineHeight: "1.7" }}>
        {project.description}
      </Paragraph>

      <Divider style={{ margin: "16px 0" }} />

      <Title level={5}>{t.projects.keyFeatures}</Title>
      <FeatureGrid>
        {project.features?.map((feature, idx) => (
          <div key={idx} className="feature-item">
            <CheckCircleOutlined className="icon" />
            <span>{feature}</span>
          </div>
        ))}
      </FeatureGrid>

      <Divider style={{ margin: "16px 0" }} />

      <Title level={5}>{t.projects.techStack}</Title>
      <TechContainer>
        {project.techStack?.map((tech, idx) => (
          <Tag
            key={idx}
            color="processing"
            style={{
              padding: "4px 10px",
              borderRadius: "6px",
              fontSize: "0.88rem",
            }}
          >
            {tech}
          </Tag>
        ))}
      </TechContainer>

      {(project.github || project.gitlab || project.demo) && (
        <>
          <Divider style={{ margin: "16px 0" }} />
          <Space wrap size="middle">
            {typeof project.github === "string" && (
              <Button
                type="primary"
                icon={<GithubOutlined />}
                href={project.github}
                target="_blank"
              >
                {t.projects.viewCode}
              </Button>
            )}

            {typeof project.github === "object" && project.github?.frontend && (
              <Button
                type="primary"
                icon={<GithubOutlined />}
                href={project.github.frontend}
                target="_blank"
              >
                GitHub (Frontend)
              </Button>
            )}

            {typeof project.github === "object" && project.github?.backend && (
              <Button
                type="primary"
                icon={<GithubOutlined />}
                href={project.github.backend}
                target="_blank"
                style={{ background: "#238636", borderColor: "#238636" }}
              >
                GitHub (Backend)
              </Button>
            )}

            {project.gitlab && (
              <>
                <Button
                  type="primary"
                  icon={<GithubOutlined />}
                  href={project.gitlab.client}
                  target="_blank"
                  style={{ background: "#fc6d26", borderColor: "#fc6d26" }}
                >
                  GitLab (Client)
                </Button>
                <Button
                  type="primary"
                  icon={<GithubOutlined />}
                  href={project.gitlab.api}
                  target="_blank"
                  style={{ background: "#fc6d26", borderColor: "#fc6d26" }}
                >
                  GitLab (API)
                </Button>
              </>
            )}

            {project.demo && (
              <Button
                icon={<LinkOutlined />}
                href={project.demo}
                target="_blank"
              >
                {t.projects.liveDemo}
              </Button>
            )}
          </Space>
        </>
      )}
    </Modal>
  );
};

export default ProjectModal;
