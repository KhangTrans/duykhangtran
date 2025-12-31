import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

const explode = keyframes`
  0% {
    transform: translate(0, 0) scale(0);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(var(--tx), var(--ty)) scale(1);
    opacity: 0;
  }
`;

const shine = keyframes`
  0%, 100% {
    opacity: 0.8;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const FireworksContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
`;

const FireworkLauncher = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}%;
  width: 200px;
  height: 200px;
  transform: translate(-50%, -50%);
`;

const Particle = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => props.color};
  box-shadow: 0 0 10px ${(props) => props.color},
    0 0 20px ${(props) => props.color}, 0 0 30px ${(props) => props.color};
  animation: ${explode} ${(props) => props.duration}s ease-out infinite;
  animation-delay: ${(props) => props.delay}s;
  --tx: ${(props) => props.tx}px;
  --ty: ${(props) => props.ty}px;
  opacity: 0;
`;

const Sparkle = styled.div`
  position: absolute;
  font-size: 24px;
  animation: ${shine} 2s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  filter: drop-shadow(0 0 5px gold);
`;

const Fireworks = () => {
  const [particles, setParticles] = useState([]);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const colors = [
      "#ff3366",
      "#ffcc00",
      "#33ff66",
      "#3366ff",
      "#ff66ff",
      "#00ffff",
    ];

    // Create particles for two firework launchers (left and right)
    const particleArray = [];

    // Left firework
    for (let i = 0; i < 30; i++) {
      const angle = (Math.PI * 2 * i) / 30;
      const distance = 80 + Math.random() * 40;
      particleArray.push({
        id: `left-${i}`,
        color: colors[Math.floor(Math.random() * colors.length)],
        tx: Math.cos(angle) * distance,
        ty: Math.sin(angle) * distance,
        duration: 1.5 + Math.random() * 0.5,
        delay: Math.random() * 3,
        launcher: "left",
      });
    }

    // Right firework
    for (let i = 0; i < 30; i++) {
      const angle = (Math.PI * 2 * i) / 30;
      const distance = 80 + Math.random() * 40;
      particleArray.push({
        id: `right-${i}`,
        color: colors[Math.floor(Math.random() * colors.length)],
        tx: Math.cos(angle) * distance,
        ty: Math.sin(angle) * distance,
        duration: 1.5 + Math.random() * 0.5,
        delay: Math.random() * 3,
        launcher: "right",
      });
    }

    setParticles(particleArray);

    // Create sparkles
    const sparkleArray = [];
    for (let i = 0; i < 10; i++) {
      sparkleArray.push({
        id: i,
        emoji: ["✨", "⭐", "🌟", "💫"][Math.floor(Math.random() * 4)],
        top: Math.random() * 30,
        left: Math.random() * 100,
        delay: Math.random() * 2,
      });
    }
    setSparkles(sparkleArray);
  }, []);

  return (
    <FireworksContainer>
      {/* Left Firework Launcher */}
      <FireworkLauncher top={100} left={15}>
        {particles
          .filter((p) => p.launcher === "left")
          .map((particle) => (
            <Particle
              key={particle.id}
              color={particle.color}
              tx={particle.tx}
              ty={particle.ty}
              duration={particle.duration}
              delay={particle.delay}
            />
          ))}
      </FireworkLauncher>

      {/* Right Firework Launcher */}
      <FireworkLauncher top={100} left={85}>
        {particles
          .filter((p) => p.launcher === "right")
          .map((particle) => (
            <Particle
              key={particle.id}
              color={particle.color}
              tx={particle.tx}
              ty={particle.ty}
              duration={particle.duration}
              delay={particle.delay}
            />
          ))}
      </FireworkLauncher>

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          top={sparkle.top}
          left={sparkle.left}
          delay={sparkle.delay}
        >
          {sparkle.emoji}
        </Sparkle>
      ))}
    </FireworksContainer>
  );
};

export default Fireworks;
