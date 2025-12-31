import { useState } from "react";
import styled, { keyframes } from "styled-components";

const explode = keyframes`
  0% {
    transform: translate(0, 0) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(var(--tx), var(--ty)) scale(1);
    opacity: 0;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9997;
`;

const Burst = styled.div`
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
`;

const Particle = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${(props) => props.color};
  box-shadow: 0 0 8px ${(props) => props.color};
  animation: ${explode} 1s ease-out forwards;
  --tx: ${(props) => props.tx}px;
  --ty: ${(props) => props.ty}px;
`;

const ClickFireworks = () => {
  const [bursts, setBursts] = useState([]);

  const createBurst = (e) => {
    const colors = [
      "#ff3366",
      "#ffcc00",
      "#33ff66",
      "#3366ff",
      "#ff66ff",
      "#00ffff",
      "#ffd700",
    ];
    const particles = [];
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const distance = 60 + Math.random() * 40;

      particles.push({
        id: Math.random(),
        color: colors[Math.floor(Math.random() * colors.length)],
        tx: Math.cos(angle) * distance,
        ty: Math.sin(angle) * distance,
      });
    }

    const newBurst = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      particles,
    };

    setBursts((prev) => [...prev, newBurst]);

    // Remove burst after animation
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== newBurst.id));
    }, 1000);
  };

  // Listen to clicks on the entire window
  useState(() => {
    const handleClick = (e) => {
      // Don't trigger on button clicks or interactive elements
      if (
        e.target.tagName !== "BUTTON" &&
        e.target.tagName !== "A" &&
        e.target.tagName !== "INPUT"
      ) {
        createBurst(e);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <Container>
      {bursts.map((burst) => (
        <Burst key={burst.id} x={burst.x} y={burst.y}>
          {burst.particles.map((particle) => (
            <Particle
              key={particle.id}
              color={particle.color}
              tx={particle.tx}
              ty={particle.ty}
            />
          ))}
        </Burst>
      ))}
    </Container>
  );
};

export default ClickFireworks;
