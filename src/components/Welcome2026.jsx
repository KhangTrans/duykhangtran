import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";

const slideDown = keyframes`
  0% {
    transform: translateY(-100vh) scale(0.5);
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  70% {
    transform: translateY(50vh) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(120vh) scale(1.2);
    opacity: 0;
  }
`;

const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 20px rgba(255, 215, 0, 0.8),
                 0 0 40px rgba(255, 215, 0, 0.6),
                 0 0 60px rgba(255, 215, 0, 0.4);
  }
  50% {
    text-shadow: 0 0 30px rgba(255, 215, 0, 1),
                 0 0 60px rgba(255, 215, 0, 0.8),
                 0 0 90px rgba(255, 215, 0, 0.6);
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  pointer-events: none;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const WelcomeText = styled.div`
  font-size: 6rem;
  font-weight: 900;
  color: #ffd700;
  text-align: center;
  white-space: nowrap;
  animation: ${slideDown} 4s ease-in-out forwards,
    ${glow} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const SubText = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-top: 20px;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.8),
    0 0 30px rgba(255, 255, 255, 0.4);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const Welcome2026 = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide after animation completes (4 seconds)
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container show={show}>
      <WelcomeText>🎉 XIN CHÀO 2026 🎉</WelcomeText>
      <SubText>Chúc mừng năm mới! ✨</SubText>
    </Container>
  );
};

export default Welcome2026;
