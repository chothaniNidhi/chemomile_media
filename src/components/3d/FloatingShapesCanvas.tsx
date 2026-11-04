import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface FloatingShapesCanvasProps {
  className?: string;
  theme?: 'light' | 'dark';
  shapeCount?: number;
}

export const FloatingShapesCanvas: React.FC<FloatingShapesCanvasProps> = ({
  className = '',
  theme = 'light',
  shapeCount = 18
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    if (!parent) return;

    let width = parent.clientWidth;
    let height = parent.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    // Colors matching brand identity
    const colors = theme === 'light'
      ? ['#398DA5', '#E6D2B3', '#F7B638', '#A9BBA5']
      : ['#398DA5', '#52A7C0', '#F7B638', '#E6D2B3'];

    const shapes: {
      mesh: THREE.Mesh;
      rotSpeedX: number;
      rotSpeedY: number;
      floatSpeed: number;
      initialY: number;
      offset: number;
    }[] = [];

    const geometries = [
      new THREE.IcosahedronGeometry(0.65, 0),
      new THREE.TorusGeometry(0.55, 0.15, 12, 32),
      new THREE.OctahedronGeometry(0.7, 0),
      new THREE.DodecahedronGeometry(0.6, 0),
    ];

    for (let i = 0; i < shapeCount; i++) {
      const geo = geometries[i % geometries.length];
      const colorHex = colors[i % colors.length];

      const mat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(colorHex),
        roughness: 0.35,
        metalness: 0.1,
        transparent: true,
        opacity: theme === 'light' ? 0.35 : 0.45,
        wireframe: i % 3 === 0
      });

      const mesh = new THREE.Mesh(geo, mat);
      const posX = (Math.random() - 0.5) * 16;
      const posY = (Math.random() - 0.5) * 12;
      const posZ = (Math.random() - 0.5) * 6 - 2;

      mesh.position.set(posX, posY, posZ);
      const scale = Math.random() * 0.6 + 0.5;
      mesh.scale.set(scale, scale, scale);

      scene.add(mesh);

      shapes.push({
        mesh,
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.015,
        floatSpeed: Math.random() * 0.001 + 0.0008,
        initialY: posY,
        offset: Math.random() * Math.PI * 2
      });
    }

    // Lights
    const dirLight = new THREE.DirectionalLight('#FAF9F5', 1.8);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    const ambLight = new THREE.AmbientLight('#ffffff', 0.8);
    scene.add(ambLight);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      shapes.forEach((s) => {
        s.mesh.rotation.x += s.rotSpeedX;
        s.mesh.rotation.y += s.rotSpeedY;
        s.mesh.position.y = s.initialY + Math.sin(time * 0.8 + s.offset) * 0.45;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometries.forEach((g) => g.dispose());
    };
  }, [theme, shapeCount]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 pointer-events-none ${className}`} 
    />
  );
};
