"use client";

import { Suspense, useRef, useState, useEffect, Component, ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage, Float, Html } from "@react-three/drei";
import * as THREE from "three";

// Simple Error Boundary for React 19
class ErrorBoundary extends Component<{ 
    children: ReactNode; 
    fallback: ReactNode;
    onError?: () => void;
}, { hasError: boolean }> {
    constructor(props: { children: ReactNode; fallback: ReactNode; onError?: () => void }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error) {
        console.error("Model loading error:", error);
        if (this.props.onError) {
            this.props.onError();
        }
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}

// 3D Model component
const Model = ({ url, autoRotate = true, onLoad }: { url: string; autoRotate?: boolean; onLoad?: () => void }) => {
    const { scene } = useGLTF(url);
    const meshRef = useRef<THREE.Group>(null);

    useEffect(() => {
        if (scene) {
            // Ensure the scene is visible
            scene.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    child.visible = true;
                }
            });
            
            if (onLoad) {
                // Call onLoad after a brief delay to ensure scene is ready
                const timer = setTimeout(() => {
                    onLoad();
                }, 300);
                return () => clearTimeout(timer);
            }
        }
    }, [scene, onLoad]);

    useFrame(() => {
        if (meshRef.current && autoRotate) {
            meshRef.current.rotation.y += 0.005;
        }
    });

    if (!scene) {
        return null;
    }

    return (
        <group ref={meshRef}>
            <primitive object={scene.clone()} />
        </group>
    );
};

// Loading indicator using Html from drei (renders HTML in 3D space)
const LoadingIndicator = () => (
    <Html center>
        <div className="text-center space-y-2">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-xs text-gray-500">جاري التحميل...</p>
        </div>
    </Html>
);

// Error fallback component
const ErrorFallback = ({ modelPath }: { modelPath: string }) => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="text-center space-y-2 p-4">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">📦</span>
            </div>
            <p className="text-xs text-gray-500">النموذج غير متوفر</p>
            <p className="text-xs text-gray-400">Place GLB file at:<br /><code className="text-[10px] bg-white/50 px-1 py-0.5 rounded">{modelPath}</code></p>
        </div>
    </div>
);

// Wrapper component for the model with stage
const ModelWrapper = ({ 
    url, 
    autoRotate, 
    onLoad
}: { 
    url: string; 
    autoRotate: boolean; 
    onLoad: () => void;
}) => {
    return (
        <Stage 
            environment="city" 
            intensity={0.6} 
            adjustCamera={false}
            shadows="contact"
        >
            <Float
                speed={1.5}
                rotationIntensity={0.3}
                floatIntensity={0.2}
            >
                <Model url={url} autoRotate={autoRotate} onLoad={onLoad} />
            </Float>
        </Stage>
    );
};

// Main ModelViewer component
const ModelViewer = ({ 
    modelPath, 
    className = "",
    autoRotate = true,
    enableControls = true 
}: { 
    modelPath: string; 
    className?: string;
    autoRotate?: boolean;
    enableControls?: boolean;
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        // Reset states when modelPath changes
        setIsLoading(true);
        setHasError(false);

        // Timeout to detect if model fails to load (10 seconds)
        const timeout = setTimeout(() => {
            setHasError(true);
            setIsLoading(false);
        }, 10000);

        return () => clearTimeout(timeout);
    }, [modelPath]);

    if (hasError) {
        return <ErrorFallback modelPath={modelPath} />;
    }

    return (
        <div className={`w-full h-full relative ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100 rounded-lg">
                    <div className="text-center space-y-2">
                        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                        <p className="text-xs text-gray-500">جاري التحميل...</p>
                    </div>
                </div>
            )}
            <Canvas
                shadows
                dpr={[1, 2]}
                camera={{ fov: 50, position: [0, 0, 3], near: 0.1, far: 100 }}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense 
                    fallback={<LoadingIndicator />}
                >
                    <ErrorBoundary
                        fallback={
                            <Html center>
                                <div className="text-center space-y-2 p-4">
                                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                                        <span className="text-2xl">📦</span>
                                    </div>
                                    <p className="text-xs text-gray-500">خطأ في تحميل النموذج</p>
                                </div>
                            </Html>
                        }
                        onError={() => {
                            setHasError(true);
                            setIsLoading(false);
                        }}
                    >
                        <ModelWrapper
                            url={modelPath}
                            autoRotate={autoRotate}
                            onLoad={() => setIsLoading(false)}
                        />
                        {enableControls && (
                            <OrbitControls
                                makeDefault
                                enableZoom={false}
                                enablePan={false}
                                autoRotate={autoRotate}
                                autoRotateSpeed={0.5}
                            />
                        )}
                    </ErrorBoundary>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default ModelViewer;
