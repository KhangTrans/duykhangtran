import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

const Trail = styled.div`
  position: fixed;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.color};
  pointer-events: none;
  z-index: 9998;
  animation: ${fadeOut} 0.5s ease-out forwards;
  box-shadow: 0 0 10px ${(props) => props.color};
`;

const CursorTrail = () => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const colors = ["#ffd700", "#ff6b6b", "#4ecdc4", "#ff66ff", "#00ffff"];
    let trailId = 0;

    const handleMouseMove = (e) => {
      const newTrail = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setTrails((prev) => [...prev, newTrail]);

      // Remove trail after animation
      setTimeout(() => {
        setTrails((prev) => prev.filter((t) => t.id !== newTrail.id));
      }, 500);
    };

    // Throttle to avoid too many trails
    let throttleTimer;
    const throttledMouseMove = (e) => {
      if (throttleTimer) return;
      throttleTimer = setTimeout(() => {
        handleMouseMove(e);
        throttleTimer = null;
      }, 30);
    };

    window.addEventListener("mousemove", throttledMouseMove);

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
    };
  }, []);

  return (
    <>
      {trails.map((trail) => (
        <Trail
          key={trail.id}
          color={trail.color}
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
