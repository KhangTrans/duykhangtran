import React from "react";
import { Typography, Space, Tooltip } from "antd";
import {
  GithubOutlined,
  MailOutlined,
  PhoneOutlined,
  HeartFilled,
  ArrowUpOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLanguage } from "../context/useLanguage";

const { Text } = Typography;

const FooterContainer = styled.footer`
  padding: 60px 20px 30px;
  text-align: center;
  position: relative;
  border-top: 1px solid rgba(24, 144, 255, 0.1);
  background: rgba(0, 0, 0, 0.05);
`;

const FooterInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const BrandBlock = styled.div`
  margin-bottom: 24px;

  .footer-name {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #1890ff, #722ed1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8px;
  }

  .footer-desc {
    max-width: 540px;
    margin: 0 auto;
    font-size: 0.95rem;
    opacity: 0.75;
    line-height: 1.6;
  }
`;

const QuickLinks = styled.div`
  margin: 24px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`;

const FooterLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 500;
  opacity: 0.8;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #1890ff;
    opacity: 1;
  }
`;

const SocialLinks = styled.div`
  margin: 20px 0 28px;
`;

const SocialIcon = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin: 0 8px;
  border-radius: 50%;
  background: rgba(24, 144, 255, 0.08);
  border: 1px solid rgba(24, 144, 255, 0.15);
  color: #1890ff;
  font-size: 1.25rem;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background: #1890ff;
    color: #ffffff;
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(24, 144, 255, 0.35);
  }
`;

const Copyright = styled.div`
  padding-top: 24px;
  border-top: 1px solid rgba(24, 144, 255, 0.08);
  font-size: 0.86rem;
  opacity: 0.7;
`;

const Footer = () => {
  const { t } = useLanguage();

  const scrollTo = (id) => {
    if (!id || id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { label: t.nav.home, id: "hero" },
    { label: t.nav.about, id: "about" },
    { label: t.nav.experience, id: "experience" },
    { label: t.nav.skills, id: "skills" },
    { label: t.nav.projects, id: "projects" },
    { label: t.nav.contact, id: "contact" },
  ];

  return (
    <FooterContainer>
      <FooterInner>
        <BrandBlock>
          <div className="footer-name">Trần Duy Khang</div>
          <p className="footer-desc">{t.footer.aboutText}</p>
        </BrandBlock>

        <QuickLinks>
          {navLinks.map((link, idx) => (
            <FooterLink key={idx} onClick={() => scrollTo(link.id)}>
              {link.label}
            </FooterLink>
          ))}
        </QuickLinks>

        <SocialLinks>
          <Tooltip title="GitHub: KhangTrans">
            <SocialIcon
              href="https://github.com/KhangTrans"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileTap={{ scale: 0.95 }}
            >
              <GithubOutlined />
            </SocialIcon>
          </Tooltip>

          <Tooltip title="Email: trank7866@gmail.com">
            <SocialIcon
              href="mailto:trank7866@gmail.com"
              aria-label="Email"
              whileTap={{ scale: 0.95 }}
            >
              <MailOutlined />
            </SocialIcon>
          </Tooltip>

          <Tooltip title="Phone: 0344 539 514">
            <SocialIcon
              href="tel:0344539514"
              aria-label="Phone"
              whileTap={{ scale: 0.95 }}
            >
              <PhoneOutlined />
            </SocialIcon>
          </Tooltip>
        </SocialLinks>

        <Copyright>
          <p style={{ margin: "0 0 6px 0" }}>{t.footer.copyright}</p>
          <p style={{ margin: 0, fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Tran Duy Khang • Can Tho, Vietnam
          </p>
        </Copyright>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
