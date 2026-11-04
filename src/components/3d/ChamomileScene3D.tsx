import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ChamomileScene3DProps {
  className?: string;
  enableInteraction?: boolean;
}

export const ChamomileScene3D: React.FC<ChamomileScene3DProps> = ({
  className = '',
  enableInteraction = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Root Group for the Chamomile Flower Emblem
    const flowerGroup = new THREE.Group();
    scene.add(flowerGroup);

    // 1. Center / Top Semi-Sun Hemisphere (Golden Yellow #F7B638)
    const sunGeo = new THREE.SphereGeometry(
      0.95,
      48,
      32,
      0,
      Math.PI * 2,
      0,
      Math.PI / 2
    );
    // Rotate to face upward like the logo
    sunGeo.rotateX(-Math.PI / 2);
    const sunMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#F7B638'),
      emissive: new THREE.Color('#966300'),
      emissiveIntensity: 0.35,
      roughness: 0.28,
      metalness: 0.15,
      clearcoat: 0.6,
      clearcoatRoughness: 0.2,
    });
    const sunMesh = new THREE.Mesh(sunGeo, sunMat);
    sunMesh.position.set(0, 0.15, 0);
    flowerGroup.add(sunMesh);

    // 2. Chamomile Petals fanning downward (Warm Sand Beige #E6D2B3)
    // We create petal shape matching the logo: teardrop fanning down
    const createPetalShape = () => {
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.bezierCurveTo(-0.25, -0.6, -0.45, -1.2, -0.3, -1.8);
      shape.bezierCurveTo(-0.15, -2.2, 0.15, -2.2, 0.3, -1.8);
      shape.bezierCurveTo(0.45, -1.2, 0.25, -0.6, 0, 0);
      return shape;
    };

    const petalShape = createPetalShape();
    const extrudeSettings = {
      depth: 0.12,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 2,
      bevelSize: 0.04,
      bevelThickness: 0.04
    };
    const petalGeo = new THREE.ExtrudeGeometry(petalShape, extrudeSettings);
    petalGeo.center();

    const petalMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#E6D2B3'),
      roughness: 0.45,
      metalness: 0.05,
      clearcoat: 0.3,
      clearcoatRoughness: 0.3,
      reflectivity: 0.5
    });

    // 5 Petals fanning downwards at calibrated angles like the logo
    const petalAngles = [-42, -21, 0, 21, 42]; // in degrees
    const petals: THREE.Mesh[] = [];

    petalAngles.forEach((angleDeg, idx) => {
      const petalMesh = new THREE.Mesh(petalGeo, petalMat);
      const angleRad = (angleDeg * Math.PI) / 180;
      
      // Pivot petal outward and down
      const distance = 0.95;
      const x = Math.sin(angleRad) * distance;
      const y = -Math.cos(angleRad) * distance * 0.72 - 0.1;
      
      petalMesh.position.set(x, y, -0.05 + Math.abs(angleDeg) * 0.002);
      petalMesh.rotation.z = -angleRad;
      petalMesh.rotation.x = 0.08 * (idx % 2 === 0 ? 1 : -1);
      petalMesh.scale.set(0.78, 0.78, 0.78);

      flowerGroup.add(petalMesh);
      petals.push(petalMesh);
    });

    // 3. Two Botanical Teal Leaves at bottom (#398DA5)
    const createLeafShape = () => {
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.bezierCurveTo(-0.6, 0.7, -1.3, 1.4, -1.6, 2.3);
      shape.bezierCurveTo(-0.9, 2.2, 0.2, 1.5, 0.5, 0.6);
      shape.bezierCurveTo(0.3, 0.2, 0.1, 0.05, 0, 0);
      return shape;
    };

    const leafShape = createLeafShape();
    const leafGeo = new THREE.ExtrudeGeometry(leafShape, {
      depth: 0.14,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 2,
      bevelSize: 0.05,
      bevelThickness: 0.05
    });

    const leafMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#398DA5'),
      emissive: new THREE.Color('#103844'),
      emissiveIntensity: 0.2,
      roughness: 0.32,
      metalness: 0.12,
      clearcoat: 0.5,
      clearcoatRoughness: 0.2
    });

    // Left Leaf (pointing left and up)
    const leftLeaf = new THREE.Mesh(leafGeo, leafMat);
    leftLeaf.position.set(-0.15, -2.1, 0.08);
    leftLeaf.rotation.z = 0.35;
    leftLeaf.rotation.y = -0.15;
    leftLeaf.scale.set(0.85, 0.85, 0.85);
    flowerGroup.add(leftLeaf);

    // Right Leaf (mirrored, pointing right and up)
    const rightLeaf = new THREE.Mesh(leafGeo, leafMat);
    rightLeaf.position.set(0.15, -2.1, 0.08);
    rightLeaf.rotation.z = -0.35;
    rightLeaf.rotation.y = 0.15;
    rightLeaf.scale.set(-0.85, 0.85, 0.85);
    flowerGroup.add(rightLeaf);

    // 4. Circular Halo Ring in Warm Sand & Gold
    const ringGeo = new THREE.TorusGeometry(2.7, 0.035, 16, 120);
    const ringMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#F7B638'),
      metalness: 0.65,
      roughness: 0.35,
      emissive: new THREE.Color('#6B4600'),
      emissiveIntensity: 0.2
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.position.set(0, -0.65, -0.2);
    flowerGroup.add(ringMesh);

    // 5. Secondary Outer Floating Delicate Orbit
    const orbitGeo = new THREE.TorusGeometry(3.15, 0.015, 16, 120);
    const orbitMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#A9BBA5'),
      transparent: true,
      opacity: 0.45
    });
    const orbitMesh = new THREE.Mesh(orbitGeo, orbitMat);
    orbitMesh.position.set(0, -0.65, -0.35);
    orbitMesh.rotation.x = 0.3;
    flowerGroup.add(orbitMesh);

    // 6. Floating Golden Pollen & Botanical Particles
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 0.5;
      scales[i] = Math.random() * 0.07 + 0.03;
      speeds[i] = Math.random() * 0.008 + 0.003;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Custom Canvas Texture for round glowing particles
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(247, 182, 56, 1)');
        gradient.addColorStop(0.35, 'rgba(230, 210, 179, 0.8)');
        gradient.addColorStop(1, 'rgba(57, 141, 165, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(32, 32, 30, 0, Math.PI * 2);
        ctx.fill();
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleMat = new THREE.PointsMaterial({
      size: 0.22,
      map: createParticleTexture(),
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 7. Atmospheric Lighting Setup
    // Key light (warm golden sun)
    const keyLight = new THREE.DirectionalLight('#FFF3D6', 2.2);
    keyLight.position.set(4, 6, 6);
    scene.add(keyLight);

    // Teal fill light from bottom left
    const fillLight = new THREE.DirectionalLight('#398DA5', 1.6);
    fillLight.position.set(-5, -4, 4);
    scene.add(fillLight);

    // Soft sage rim light
    const rimLight = new THREE.DirectionalLight('#A9BBA5', 1.2);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // Ambient light
    const ambientLight = new THREE.AmbientLight('#FAF9F5', 1.1);
    scene.add(ambientLight);

    // Interactive pointer & scroll physics
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let scrollY = 0;
    let bounceScale = 1.0;
    let targetBounceScale = 1.0;

    const handlePointerMove = (e: MouseEvent) => {
      if (!enableInteraction) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
      targetRotationY = mouseX * 0.45;
      targetRotationX = -mouseY * 0.35;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleClick = () => {
      targetBounceScale = 1.14;
      setClickCount((prev) => prev + 1);
      setIsInteracting(true);
      setTimeout(() => {
        targetBounceScale = 1.0;
        setIsInteracting(false);
      }, 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    if (enableInteraction) {
      container.addEventListener('mousemove', handlePointerMove);
      container.addEventListener('click', handleClick);
    }

    // Animation Loop
    let clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle floating physics
      const idleFloatY = Math.sin(elapsedTime * 1.2) * 0.12;
      const idleRotZ = Math.sin(elapsedTime * 0.8) * 0.04;
      const scrollRotY = scrollY * 0.0012;

      // Smooth lerp to mouse & scroll targets
      flowerGroup.rotation.y += (targetRotationY + scrollRotY - flowerGroup.rotation.y) * 0.06;
      flowerGroup.rotation.x += (targetRotationX - flowerGroup.rotation.x) * 0.06;
      flowerGroup.rotation.z = idleRotZ;
      flowerGroup.position.y = -0.15 + idleFloatY;

      // Bounce scale spring
      bounceScale += (targetBounceScale - bounceScale) * 0.15;
      flowerGroup.scale.set(bounceScale, bounceScale, bounceScale);

      // Rotate subtle orbit halo
      orbitMesh.rotation.z = elapsedTime * 0.15;
      ringMesh.rotation.z = -elapsedTime * 0.08;

      // Gentle wave animation for petals
      petals.forEach((p, idx) => {
        p.position.z = -0.05 + Math.sin(elapsedTime * 2 + idx * 0.8) * 0.02;
      });

      // Animate golden pollen particles
      const positionsArr = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positionsArr[i * 3 + 1] += Math.sin(elapsedTime + i) * 0.003;
        positionsArr[i * 3] += Math.cos(elapsedTime * 0.5 + i) * 0.002;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (enableInteraction) {
        container.removeEventListener('mousemove', handlePointerMove);
        container.removeEventListener('click', handleClick);
      }
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sunGeo.dispose();
      sunMat.dispose();
      petalGeo.dispose();
      petalMat.dispose();
      leafGeo.dispose();
      leafMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      orbitGeo.dispose();
      orbitMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [enableInteraction]);

  return (
    <div className={`relative w-full h-full cursor-grab active:cursor-grabbing select-none ${className}`}>
      <div ref={containerRef} className="w-full h-full" />
      
      {/* Floating 3D Interaction Pill Badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-300">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-botanical-ivory/80 backdrop-blur-md border border-botanical-teal/20 shadow-sm text-xs text-botanical-charcoal/80 font-medium">
          <span className="w-2 h-2 rounded-full bg-botanical-yellow animate-ping" />
          <span>Interactive 3D Emblem • Hover & Click</span>
          {clickCount > 0 && (
            <span className="text-botanical-teal font-semibold ml-1">({clickCount} blooms)</span>
          )}
        </div>
      </div>
    </div>
  );
};
