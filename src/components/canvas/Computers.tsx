import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-1, 9, 5]}
        angle={1.5}
        intensity={300}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.75, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Добавить слушателя для изменений в размер экрана
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    // Установите начальное значение переменной состояния ismobile`
    setIsMobile(mediaQuery.matches);
    // Определите функцию обратного вызова для обработки изменений в медиа -запросе
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    // Добавьте функцию обратного вызова в качестве слушателя для изменений в медиа -запросе
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    // Удалить слушателя, когда компонент не установлен
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas;
