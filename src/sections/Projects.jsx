import { Card, Row, Col, Typography, Tag, Button, Space } from "antd";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import styled from "styled-components";

const { Title, Paragraph } = Typography;

const ProjectsContainer = styled.section`
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

const ProjectCard = styled(Card)`
  height: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 12px;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 40px rgba(24, 144, 255, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #1890ff, #722ed1);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  .ant-card-body {
    padding: 24px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-weight: 600;
  background: linear-gradient(135deg, #1890ff, #722ed1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ProjectType = styled.div`
  display: inline-block;
  padding: 4px 12px;
  background: linear-gradient(135deg, #1890ff20, #722ed120);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #1890ff;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;

  li {
    padding: 8px 0;
    padding-left: 25px;
    position: relative;

    &::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #52c41a;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`;

const TagsContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      type: "University Project",
      title: "Gym Management System",
      description:
        "A comprehensive management system designed for gym facilities, streamlining operations and improving member experience.",
      features: [
        "Member management with detailed profiles",
        "Subscription and membership tracking",
        "Supplement product sales integration",
        "Admin dashboard with analytics",
        "Payment processing and reporting",
      ],
      techStack: ["Java", "MySQL", "HTML/CSS", "JavaScript"],
      github: "https://github.com/yourusername/gym-management",
      demo: null,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      type: "Real-world Project",
      title: "National Bus Ticket Booking Platform",
      description:
        "A scalable online platform connecting multiple bus operators across Vietnam, providing seamless ticket booking experience.",
      features: [
        "Multi-operator bus route integration",
        "Real-time seat availability",
        "Online booking and ticket management",
        "English language support",
        "User-friendly responsive interface",
        "Payment gateway integration",
      ],
      techStack: ["ReactJS", "NodeJS", "ExpressJS", "MySQL", "Ant Design"],
      github: "https://github.com/yourusername/bus-booking",
      demo: null,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
  ];

  return (
    <ProjectsContainer id="projects">
      <SectionTitle level={1}>Featured Projects</SectionTitle>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <Row gutter={[24, 24]}>
          {projects.map((project, index) => (
            <Col xs={24} lg={12} key={index}>
              <motion.div variants={itemVariants}>
                <ProjectCard>
                  <ProjectType>{project.type}</ProjectType>
                  <ProjectTitle>{project.title}</ProjectTitle>

                  <Paragraph style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                    {project.description}
                  </Paragraph>

                  <Title level={5}>Key Features:</Title>
                  <FeatureList>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </FeatureList>

                  <Title level={5}>Tech Stack:</Title>
                  <TagsContainer>
                    {project.techStack.map((tech, idx) => (
                      <Tag
                        key={idx}
                        color="blue"
                        style={{
                          fontSize: "0.9rem",
                          padding: "5px 12px",
                          borderRadius: "6px",
                        }}
                      >
                        {tech}
                      </Tag>
                    ))}
                  </TagsContainer>

                  <Space style={{ marginTop: "20px" }}>
                    <Button
                      type="primary"
                      icon={<GithubOutlined />}
                      href={project.github}
                      target="_blank"
                    >
                      View Code
                    </Button>
                    {project.demo && (
                      <Button
                        icon={<LinkOutlined />}
                        href={project.demo}
                        target="_blank"
                      >
                        Live Demo
                      </Button>
                    )}
                  </Space>
                </ProjectCard>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </ProjectsContainer>
  );
};

export default Projects;
