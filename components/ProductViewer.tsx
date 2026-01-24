"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage, Float } from "@react-three/drei";
import * as THREE from "three";

// Placeholder component for the 3D model
const PlaceholderModel = (props: any) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (!meshRef.current) return;
        // Slow rotation
        meshRef.current.rotation.y += 0.005;
    });

    return (
        <mesh {...props} ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#1b9cd7" roughness={0.3} metalness={0.1} />
        </mesh>
    );
};

const ProductViewer = () => {
    return (
        <div className="w-full h-[400px] md:h-[500px] relative cursor-move">
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [0, 0, 8] }}>
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.6}>
                        <Float
                            speed={2}
                            rotationIntensity={0.5}
                            floatIntensity={0.5}
                        >
                            <PlaceholderModel />
                        </Float>
                    </Stage>
                    <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} />
                </Suspense>
            </Canvas>
            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                <span className="text-sm text-gray-400 bg-white/80 px-3 py-1 rounded-full shadow-sm">
                    اسحب للتدوير
                </span>
            </div>
        </div>
    );
};

export default ProductViewer;
