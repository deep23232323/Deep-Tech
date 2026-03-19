import React, { useRef, useMemo } from "react";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function CodeGalaxy({ count = 120 }) {
  const group = useRef();

  const codes = [
    "const", "let", "function()", "return", "async",
    "await", "useState()", "useEffect()", "map()",
    "filter()", "reduce()", "import", "export",
    "console.log()", "<div>", "</div>", "npm install",
    "git push", "class", "props", "state"
  ];

  const particles = useMemo(() => {
    const arr = [];

    for (let i = 0; i < count; i++) {
      arr.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ],
        code: codes[Math.floor(Math.random() * codes.length)],
        size: Math.random() * 0.4 + 0.15
      });
    }

    return arr;
  }, [count]);

  useFrame((state) => {
    group.current.rotation.y += 0.0008;
    group.current.rotation.x += 0.0003;
  });

  return (
    <group ref={group}>
      {particles.map((p, i) => (
        <Text
          key={i}
          position={p.position}
          fontSize={p.size}
          color="#D4AF37"
          anchorX="center"
          anchorY="middle"
        >
          {p.code}
        </Text>
      ))}
    </group>
  );
}