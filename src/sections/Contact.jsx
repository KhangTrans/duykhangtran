import React, { useState } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Typography,
  Row,
  Col,
  Space,
  message,
  Tooltip,
} from "antd";
import {
  MailOutlined,
  UserOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  SendOutlined,
  CopyOutlined,
  CheckOutlined,
  FilePdfOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useLanguage } from "../context/useLanguage";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactContainer = styled.section`
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

const ContactCard = styled(Card)`
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(24, 144, 255, 0.15);
  height: 100%;

  .ant-card-body {
    padding: 32px;
  }
`;

const InfoCard = styled(Card)`
  border-radius: 16px;
  border: 1px solid rgba(24, 144, 255, 0.12);
  transition: all 0.3s ease;
  margin-bottom: 16px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(24, 144, 255, 0.12);
    border-color: #1890ff;
  }

  .ant-card-body {
    padding: 20px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const InfoLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  .info-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: ${(props) => props.bg || "rgba(24, 144, 255, 0.1)"};
    color: ${(props) => props.color || "#1890ff"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.35rem;
    flex-shrink: 0;
  }

  .info-text {
    .label {
      font-size: 0.82rem;
      opacity: 0.7;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 600;
    }

    .value {
      font-size: 1.05rem;
      font-weight: 600;
      color: inherit;
      text-decoration: none;

      &:hover {
        color: #1890ff;
      }
    }
  }
`;

const CopyButton = styled.button`
  background: rgba(24, 144, 255, 0.08);
  border: 1px solid rgba(24, 144, 255, 0.15);
  color: #1890ff;
  padding: 6px 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #1890ff;
    color: white;
  }
`;

const CvBanner = styled(Card)`
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.08), rgba(114, 46, 209, 0.08));
  border: 1px dashed rgba(24, 144, 255, 0.3);
  margin-top: 24px;

  .ant-card-body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const Contact = () => {
  const { t } = useLanguage();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [copiedKey, setCopiedKey] = useState(null);

  const SERVICE_ID = "service_z4o66ps";
  const TEMPLATE_ID = "template_dwct03j";
  const USER_ID = "YWHwHqaw639SV4vQA";
  const RECAPTCHA_SITE_KEY = "6LceWjosAAAAAJhyqJ2Yp8YPuxZeOatpdCizq54o";

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    message.success(t.contact.info.copied);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const onFinish = async (values) => {
    if (!recaptchaValue) {
      message.error(t.contact.form.recaptchaError);
      return;
    }

    setLoading(true);

    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
        to_name: "TRAN DUY KHANG",
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);

      message.success(t.contact.form.success);
      form.resetFields();
      setRecaptchaValue(null);

      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    } catch (error) {
      console.error("Error sending email:", error);
      message.error(t.contact.form.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContainer id="contact">
      <SectionHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle level={1}>{t.contact.title}</SectionTitle>
          <Subtitle>{t.contact.subtitle}</Subtitle>
        </motion.div>
      </SectionHeader>

      <Row gutter={[32, 32]}>
        {/* Left Column: Direct Info Cards & CV Download */}
        <Col xs={24} lg={10}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Email Card */}
            <InfoCard>
              <InfoLeft color="#1890ff" bg="rgba(24, 144, 255, 0.1)">
                <div className="info-icon">
                  <MailOutlined />
                </div>
                <div className="info-text">
                  <div className="label">{t.contact.info.email}</div>
                  <a href="mailto:trank7866@gmail.com" className="value">
                    trank7866@gmail.com
                  </a>
                </div>
              </InfoLeft>
              <CopyButton onClick={() => handleCopy("trank7866@gmail.com", "email")}>
                {copiedKey === "email" ? <CheckOutlined /> : <CopyOutlined />}
                <span>{copiedKey === "email" ? t.contact.info.copied : t.contact.info.copy}</span>
              </CopyButton>
            </InfoCard>

            {/* Phone Card */}
            <InfoCard>
              <InfoLeft color="#10b981" bg="rgba(16, 185, 129, 0.1)">
                <div className="info-icon">
                  <PhoneOutlined />
                </div>
                <div className="info-text">
                  <div className="label">{t.contact.info.phone}</div>
                  <a href="tel:0344539514" className="value">
                    0344 539 514
                  </a>
                </div>
              </InfoLeft>
              <CopyButton onClick={() => handleCopy("0344539514", "phone")}>
                {copiedKey === "phone" ? <CheckOutlined /> : <CopyOutlined />}
                <span>{copiedKey === "phone" ? t.contact.info.copied : t.contact.info.copy}</span>
              </CopyButton>
            </InfoCard>

            {/* Location Card */}
            <InfoCard>
              <InfoLeft color="#722ed1" bg="rgba(114, 46, 209, 0.1)">
                <div className="info-icon">
                  <EnvironmentOutlined />
                </div>
                <div className="info-text">
                  <div className="label">{t.contact.info.location}</div>
                  <div className="value">{t.contact.info.locationVal}</div>
                </div>
              </InfoLeft>
            </InfoCard>

            {/* Status Card */}
            <InfoCard>
              <InfoLeft color="#f59e0b" bg="rgba(245, 158, 11, 0.1)">
                <div className="info-icon">
                  <UserOutlined />
                </div>
                <div className="info-text">
                  <div className="label">{t.contact.info.status}</div>
                  <div className="value" style={{ color: "#10b981" }}>
                    ● {t.contact.info.statusVal}
                  </div>
                </div>
              </InfoLeft>
            </InfoCard>

            {/* Quick CV Download Banner */}
            <CvBanner>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <FilePdfOutlined style={{ fontSize: "1.4rem", color: "#1890ff" }} />
                <strong style={{ fontSize: "1.05rem" }}>{t.contact.cvBanner.title}</strong>
              </div>
              <p style={{ margin: 0, fontSize: "0.92rem", opacity: 0.8 }}>
                {t.contact.cvBanner.desc}
              </p>
              <Button
                type="primary"
                icon={<FilePdfOutlined />}
                href="/Tran-Duy-Khang-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ alignSelf: "flex-start", marginTop: "4px" }}
              >
                {t.contact.cvBanner.btn}
              </Button>
            </CvBanner>
          </motion.div>
        </Col>

        {/* Right Column: Contact Message Form */}
        <Col xs={24} lg={14}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactCard>
              <Title level={3} style={{ marginBottom: "24px" }}>
                {t.contact.form.title}
              </Title>

              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  label={t.contact.form.nameLabel}
                  name="name"
                  rules={[
                    { required: true, message: t.contact.form.nameError },
                    { min: 2, message: "Name must be at least 2 characters" },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder={t.contact.form.namePlaceholder}
                    size="large"
                    style={{ borderRadius: "8px" }}
                  />
                </Form.Item>

                <Form.Item
                  label={t.contact.form.emailLabel}
                  name="email"
                  rules={[
                    { required: true, message: t.contact.form.emailError },
                    { type: "email", message: t.contact.form.emailError },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined />}
                    placeholder={t.contact.form.emailPlaceholder}
                    size="large"
                    style={{ borderRadius: "8px" }}
                  />
                </Form.Item>

                <Form.Item
                  label={t.contact.form.messageLabel}
                  name="message"
                  rules={[
                    { required: true, message: t.contact.form.messageError },
                    { min: 10, message: "Message must be at least 10 characters" },
                  ]}
                >
                  <TextArea
                    placeholder={t.contact.form.messagePlaceholder}
                    rows={4}
                    style={{ borderRadius: "8px" }}
                  />
                </Form.Item>

                {/* reCAPTCHA Checkbox */}
                <Form.Item style={{ marginBottom: "20px" }}>
                  <ReCAPTCHA
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={(val) => setRecaptchaValue(val)}
                  />
                </Form.Item>

                <Form.Item style={{ marginBottom: 0 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    icon={<SendOutlined />}
                    loading={loading}
                    block
                    style={{
                      height: "48px",
                      borderRadius: "10px",
                      fontWeight: 600,
                      fontSize: "1rem",
                      boxShadow: "0 6px 18px rgba(24, 144, 255, 0.35)",
                    }}
                  >
                    {loading ? t.contact.form.sending : t.contact.form.submit}
                  </Button>
                </Form.Item>
              </Form>
            </ContactCard>
          </motion.div>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default Contact;
