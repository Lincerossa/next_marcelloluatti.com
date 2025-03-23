'use client';
import React, { FC, Suspense, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MathUtils } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Text, Stars } from '@react-three/drei';
import theme from '@/consts/colors';

type Position = [number, number, number];
const Sphere: FC<{ position: Position }> = ({ position }) => {
  const { materials } = useGLTF('/test.gltf');
  return (
    <group position={position}>
      <mesh material={materials['Material.001']}>
        <sphereGeometry args={[0.2, 20, 20]} />
      </mesh>
    </group>
  );
};

type TotemProps = {
  onClick: VoidFunction;
  negative: number;
  position: Position;
  timer: number;
  label: string;
};
const Totem: FC<TotemProps> = ({
  onClick,
  negative,
  position,
  timer,
  ...props
}) => {
  const [isActive, setActive] = useState<boolean | null>(null);
  const [hovered, setHovered] = useState<boolean | null>(null);
  const group = useRef<{
    rotation: {
      y: number;
    };
  } | null>(null);

  const { materials } = useGLTF('/test.gltf');

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() / 3;
    if (time > timer) setActive(true);
    if (!group.current) return;
    group.current.rotation.y = negative ? +time : -time;
  });

  return (
    <group
      onClick={onClick}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerDown={onClick}>
      <group
        ref={group}
        {...props}
        dispose={null}
        scale={0.4}
        position={position}>
        <mesh material={materials['Material.001']}>
          <boxGeometry args={[1, 2, 1]} />
        </mesh>
      </group>
      {isActive && (
        <group
          {...props}
          dispose={null}
          position={[negative ? -1 : 1, position[1], position[2]]}>
          <Suspense fallback={null}>
            <Text
              fontSize={0.3}
              color={hovered ? theme.COLORS.PRIMARY : 'white'}
              textAlign="left">
              {props.label}
            </Text>
          </Suspense>
        </group>
      )}
    </group>
  );
};

type RnProps<T> = (min: T, max: T) => T;
const Lights = () => {
  const Rn: RnProps<number> = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <>
      {Array.from({ length: 90 }).map((e, i) => (
        <pointLight
          key={i}
          intensity={Rn(-10, 10)}
          color={i % 5 ? theme.COLORS.SECONDARY : theme.COLORS.PRIMARY}
          position={[Rn(-2, 2), Rn(-2, 2), Rn(-2, 2)]}
        />
      ))}
      <ambientLight
        intensity={500}
        color={theme.COLORS.SECONDARY}
        position={[0, 5, 5]}
      />
    </>
  );
};

function Surfing({ handleSetSurfed }: { handleSetSurfed: VoidFunction }) {
  useFrame(({ camera, clock }) => {
    if (clock?.elapsedTime < 0.75) return;
    if (camera.position.z > 5) {
      camera.position.z = MathUtils.lerp(camera.position.z, 4, 0.03);
    }
    if (camera.position.y > 0) {
      camera.position.y = MathUtils.lerp(camera.position.y, -1, 0.03);
    }

    if (camera.position.y <= 0 && camera.position.z <= 5) {
      camera.position.y = 0;
      camera.position.z = 5;
      handleSetSurfed();
    }
  });
  return null;
}

type R3FProps = {
  items: Array<{
    label: string;
    slug: string;
  }>;
};
const R3F: FC<R3FProps> = ({ items }) => {
  const router = useRouter();
  const [surfed, setSurfed] = useState<boolean>(false);

  const handleSetSurfed = () => {
    setSurfed(true);
  };

  return (
    <div className="canvasWrapper">
      <Canvas camera={{ fov: 75, position: [0, 5, 700] }}>
        <Suspense fallback={null}>
          {surfed && <OrbitControls />}
          <Stars speed={2} count={5000} saturation={10} radius={120} />
          {!surfed && <Surfing handleSetSurfed={handleSetSurfed} />}
          <Sphere position={[0, 2, 0]} />
          {items.map(({ label, slug }, i) => (
            <Totem
              key={label}
              position={[0, 1 - i, 0]}
              label={label}
              timer={0.5 + i * 0.15}
              negative={i % 2}
              onClick={() => {
                router.push(slug);
              }}
            />
          ))}
          <Sphere position={[0, 1 - items.length, 0]} />
          <Lights />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default R3F;
