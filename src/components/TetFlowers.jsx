import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

const float = keyframes`
  0% {
    transform: translateY(-10vh) translateX(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(110vh) translateX(100px) rotate(360deg);
    opacity: 0;
  }
`;

const FloatingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
`;

const Flower = styled.div`
  position: absolute;
  font-size: ${(props) => props.size}px;
  animation: ${float} ${(props) => props.duration}s linear infinite;
  animation-delay: ${(props) => props.delay}s;
  left: ${(props) => props.left}%;
  opacity: 0;
  filter: drop-shadow(0 0 3px rgba(255, 215, 0, 0.3));
`;

const TetFlowers = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    // Create 20 particles with random properties
    const flowerArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: ["⚛️", "💻", "🚀", "⚡", "🔥", "🌐", "🎨", "💡", "📱", "🛠️"][
        Math.floor(Math.random() * 10)
      ],
      size: Math.random() * 20 + 20, // 20-40px
      duration: Math.random() * 10 + 15, // 15-25s
      delay: Math.random() * 10, // 0-10s
      left: Math.random() * 100, // 0-100%
    }));
    setFlowers(flowerArray);
  }, []);

  return (
    <FloatingContainer>
      {flowers.map((flower) => (
        <Flower
          key={flower.id}
          size={flower.size}
          duration={flower.duration}
          delay={flower.delay}
          left={flower.left}
        >
          {flower.emoji}
        </Flower>
      ))}
    </FloatingContainer>
  );
};

export default TetFlowers;
