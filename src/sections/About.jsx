import { Card, Row, Col, Typography, Timeline } from "antd";
import {
  BookOutlined,
  TrophyOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import styled from "styled-components";

const { Title, Paragraph } = Typography;

const AboutContainer = styled.section`
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

const StyledCard = styled(Card)`
  height: 100%;
  transition: all 0.3s ease;
  border-radius: 12px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(24, 144, 255, 0.2);
  }

  .ant-card-head {
    border-bottom: 2px solid #1890ff;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #1890ff;
`;

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AboutContainer id="about">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <SectionTitle level={1}>About Me</SectionTitle>

        <Row gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <motion.div variants={itemVariants}>
              <StyledCard>
                <Paragraph style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                  Hello! I'm <strong>TRAN DUY KHANG</strong>, a passionate
                  Software Engineering student at{" "}
                  <strong>FPT University, Cần Thơ Campus</strong>. I specialize
                  in building modern, responsive web applications using
                  cutting-edge technologies.
                </Paragraph>
                <Paragraph style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                  My journey in software development began with a curiosity
                  about how things work on the web. Today, I focus on creating
                  intuitive user interfaces and seamless user experiences using
                  React, Node.js, and various other technologies.
                </Paragraph>
                <Paragraph style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                  When I'm not coding, I enjoy learning about new technologies,
                  contributing to open-source projects, and exploring innovative
                  solutions to real-world problems.
                </Paragraph>
              </StyledCard>
            </motion.div>
          </Col>

          <Col xs={24} lg={12}>
            <Row gutter={[16, 16]}>
              <Col xs={24}>
                <motion.div variants={itemVariants}>
                  <StyledCard>
                    <IconWrapper>
                      <BookOutlined />
                    </IconWrapper>
                    <Title level={4}>Education</Title>
                    <Paragraph style={{ fontSize: "1rem" }}>
                      <strong>FPT University - Cần Thơ Campus</strong>
                      <br />
                      Major: Software Engineering
                      <br />
                      Focus: Full-stack Web Development
                    </Paragraph>
                  </StyledCard>
                </motion.div>
              </Col>

              <Col xs={24}>
                <motion.div variants={itemVariants}>
                  <StyledCard>
                    <IconWrapper>
                      <RocketOutlined />
                    </IconWrapper>
                    <Title level={4}>Career Objective</Title>
                    <Paragraph style={{ fontSize: "1rem" }}>
                      To become a proficient Full-stack Developer, creating
                      innovative solutions that make a positive impact. I'm
                      eager to work on challenging projects that push my
                      boundaries and allow me to grow professionally.
                    </Paragraph>
                  </StyledCard>
                </motion.div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row gutter={[24, 24]} style={{ marginTop: "40px" }}>
          <Col xs={24}>
            <motion.div variants={itemVariants}>
              <StyledCard
                title={
                  <span>
                    <TrophyOutlined
                      style={{ marginRight: "10px", color: "#1890ff" }}
                    />
                    My Journey
                  </span>
                }
              >
                <Timeline
                  mode="alternate"
                  items={[
                    {
                      children: (
                        <>
                          <Title level={5}>Started Software Engineering</Title>
                          <Paragraph>
                            Began my journey at FPT University, learning
                            fundamentals of programming with C and Java
                          </Paragraph>
                        </>
                      ),
                      color: "blue",
                    },
                    {
                      children: (
                        <>
                          <Title level={5}>Web Development</Title>
                          <Paragraph>
                            Discovered passion for web development, mastered
                            HTML, CSS, JavaScript, and modern frameworks
                          </Paragraph>
                        </>
                      ),
                      color: "green",
                    },
                    {
                      children: (
                        <>
                          <Title level={5}>First Major Project</Title>
                          <Paragraph>
                            Built a comprehensive Gym Management System with
                            team members
                          </Paragraph>
                        </>
                      ),
                      color: "purple",
                    },
                    {
                      children: (
                        <>
                          <Title level={5}>Real-world Experience</Title>
                          <Paragraph>
                            Contributed to National Bus Ticket Booking Platform,
                            working with real users and requirements
                          </Paragraph>
                        </>
                      ),
                      color: "orange",
                    },
                    {
                      children: (
                        <>
                          <Title level={5}>Continued Growth</Title>
                          <Paragraph>
                            Continuously learning and exploring new
                            technologies, building projects, and preparing for a
                            professional career
                          </Paragraph>
                        </>
                      ),
                      color: "cyan",
                    },
                  ]}
                />
              </StyledCard>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </AboutContainer>
  );
};

export default About;
