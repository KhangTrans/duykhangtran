import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

const fall = keyframes`
  0% {
    transform: translateY(-10vh) translateX(0) rotateZ(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(110vh) translateX(100px) rotateZ(720deg);
    opacity: 0.5;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
  z-index: 999;
`;

const Confetti = styled.div`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: ${(props) => props.color};
  animation: ${fall} ${(props) => props.duration}s linear infinite;
  animation-delay: ${(props) => props.delay}s;
  left: ${(props) => props.left}%;
  top: -10vh;
  opacity: 0.8;
  border-radius: ${(props) => (props.shape === "circle" ? "50%" : "0")};
  transform-origin: center;
`;

const ConfettiEffect = () => {
  const [confettis, setConfettis] = useState([]);

  useEffect(() => {
    const colors = [
      "#ff6b6b",
      "#ffd700",
      "#4ecdc4",
      "#ff66ff",
      "#00ffff",
      "#ffcc00",
      "#ff3366",
    ];

    const confettiArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      size: Math.random() * 10 + 5, // 5-15px
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 5 + 3, // 3-8s
      delay: Math.random() * 5, // 0-5s
      left: Math.random() * 100, // 0-100%
      shape: Math.random() > 0.5 ? "circle" : "square",
    }));

    setConfettis(confettiArray);
  }, []);

  return (
    <Container>
      {confettis.map((confetti) => (
        <Confetti
          key={confetti.id}
          size={confetti.size}
          color={confetti.color}
          duration={confetti.duration}
          delay={confetti.delay}
          left={confetti.left}
          shape={confetti.shape}
        />
      ))}
    </Container>
  );
};

export default ConfettiEffect;
