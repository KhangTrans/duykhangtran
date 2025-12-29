import { Typography, Space } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  HeartFilled,
} from "@ant-design/icons";
import styled from "styled-components";
import { motion } from "framer-motion";

const { Text } = Typography;

const FooterContainer = styled.footer`
  padding: 60px 20px 30px;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const SocialLinks = styled.div`
  margin-bottom: 30px;
`;

const SocialIcon = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 0 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1890ff, #722ed1);
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(24, 144, 255, 0.4);
    color: white;
  }
`;

const Copyright = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.7;
`;

const QuickLinks = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const FooterLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #1890ff;
  }
`;

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: <GithubOutlined />,
      url: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <LinkedinOutlined />,
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: <MailOutlined />,
      url: "mailto:khangtd@example.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { label: "Home", id: null },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <FooterContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Quick Links */}
        <QuickLinks>
          {quickLinks.map((link, index) => (
            <FooterLink key={index} onClick={() => scrollToSection(link.id)}>
              {link.label}
            </FooterLink>
          ))}
        </QuickLinks>

        {/* Social Links */}
        <SocialLinks>
          <Space size="large">
            {socialLinks.map((social, index) => (
              <SocialIcon
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </SocialIcon>
            ))}
          </Space>
        </SocialLinks>

        {/* Copyright */}
        <Copyright>
          <Text>
            Made with{" "}
            <HeartFilled style={{ color: "#ff4d4f", margin: "0 5px" }} /> by{" "}
            <strong>Trần Duy Khang</strong>
          </Text>
          <br />
          <Text style={{ fontSize: "0.9rem" }}>
            © {new Date().getFullYear()} All rights reserved.
          </Text>
        </Copyright>
      </motion.div>
    </FooterContainer>
  );
};

export default Footer;
