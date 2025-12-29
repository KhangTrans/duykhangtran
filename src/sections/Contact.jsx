import { useState } from "react";
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
} from "antd";
import {
  MailOutlined,
  UserOutlined,
  MessageOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactContainer = styled.section`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(Title)`
  text-align: center;
  margin-bottom: 20px !important;
  font-size: 3rem !important;
  background: linear-gradient(135deg, #1890ff, #722ed1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem !important;
  }
`;

const Subtitle = styled(Paragraph)`
  text-align: center;
  font-size: 1.2rem;
  opacity: 0.8;
  margin-bottom: 60px !important;
`;

const ContactCard = styled(Card)`
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  .ant-card-body {
    padding: 40px;
  }
`;

const InfoCard = styled(Card)`
  height: 100%;
  text-align: center;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(24, 144, 255, 0.2);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #1890ff;
`;

const StyledForm = styled(Form)`
  .ant-form-item-label > label {
    font-size: 1rem;
    font-weight: 500;
  }
`;

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  // EmailJS Configuration - Replace with your own credentials
  const SERVICE_ID = "service_z4o66ps";
  const TEMPLATE_ID = "template_dwct03j";
  const USER_ID = "YWHwHqaw639SV4vQA";

  // reCAPTCHA Site Key - Using test key (replace with your own for production)
  const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const onFinish = async (values) => {
    if (!recaptchaValue) {
      message.error("Please complete the reCAPTCHA verification");
      return;
    }

    setLoading(true);

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
        to_name: "Trần Duy Khang",
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);

      message.success(
        "Message sent successfully! I will get back to you soon."
      );
      form.resetFields();
      setRecaptchaValue(null);

      // Reset reCAPTCHA
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    } catch (error) {
      console.error("Error sending email:", error);
      message.error(
        "Failed to send message. Please try again or contact me directly via email."
      );
    } finally {
      setLoading(false);
    }
  };

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

  const contactInfo = [
    {
      icon: <MailOutlined />,
      title: "Email",
      value: "khangtd@example.com",
      link: "mailto:khangtd@example.com",
    },
    {
      icon: <UserOutlined />,
      title: "Location",
      value: "Cần Thơ, Vietnam",
      link: null,
    },
    {
      icon: <MessageOutlined />,
      title: "Response Time",
      value: "Within 24 hours",
      link: null,
    },
  ];

  return (
    <ContactContainer id="contact">
      <SectionTitle level={1}>Get In Touch</SectionTitle>
      <Subtitle>
        Have a question or want to work together? Feel free to reach out!
      </Subtitle>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <Row gutter={[24, 24]} style={{ marginBottom: "40px" }}>
          {contactInfo.map((info, index) => (
            <Col xs={24} md={8} key={index}>
              <motion.div variants={itemVariants}>
                <InfoCard>
                  <IconWrapper>{info.icon}</IconWrapper>
                  <Title level={4}>{info.title}</Title>
                  {info.link ? (
                    <a
                      href={info.link}
                      style={{ fontSize: "1rem", color: "#1890ff" }}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <Paragraph style={{ fontSize: "1rem", margin: 0 }}>
                      {info.value}
                    </Paragraph>
                  )}
                </InfoCard>
              </motion.div>
            </Col>
          ))}
        </Row>

        <Row justify="center">
          <Col xs={24} lg={16}>
            <motion.div variants={itemVariants}>
              <ContactCard>
                <Title
                  level={3}
                  style={{ marginBottom: "30px", textAlign: "center" }}
                >
                  Send Me a Message
                </Title>
                <StyledForm
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[
                      { required: true, message: "Please enter your name" },
                      { min: 2, message: "Name must be at least 2 characters" },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined />}
                      placeholder="Enter your full name"
                      size="large"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Please enter a valid email" },
                    ]}
                  >
                    <Input
                      prefix={<MailOutlined />}
                      placeholder="Enter your email address"
                      size="large"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Message"
                    name="message"
                    rules={[
                      { required: true, message: "Please enter your message" },
                      {
                        min: 10,
                        message: "Message must be at least 10 characters",
                      },
                    ]}
                  >
                    <TextArea
                      rows={6}
                      placeholder="Enter your message here..."
                      maxLength={1000}
                      showCount
                    />
                  </Form.Item>

                  <Form.Item>
                    <ReCAPTCHA
                      sitekey={RECAPTCHA_SITE_KEY}
                      onChange={handleRecaptchaChange}
                      theme="dark"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      icon={<SendOutlined />}
                      loading={loading}
                      block
                      style={{ height: "50px", fontSize: "1.1rem" }}
                    >
                      Send Message
                    </Button>
                  </Form.Item>
                </StyledForm>
              </ContactCard>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </ContactContainer>
  );
};

export default Contact;
