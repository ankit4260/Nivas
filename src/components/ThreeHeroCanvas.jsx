import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeHeroCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // Get parent dimensions
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 4, 10);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Groups
    const mainGroup = new THREE.Group();
    const villaGroup = new THREE.Group();
    const dnaGroup = new THREE.Group();
    mainGroup.add(villaGroup);
    mainGroup.add(dnaGroup);
    scene.add(mainGroup);

    // Light Setup
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffecc7, 2.5);
    dirLight.position.set(5, 10, 7);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.bias = -0.001;
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xb8925a, 3, 10);
    pointLight.position.set(0, 1.5, 0);
    scene.add(pointLight);

    // Materials
    const wallMaterial = new THREE.MeshStandardMaterial({
      color: 0xede6d9, // Beige
      roughness: 0.8,
      metalness: 0.1
    });

    const woodMaterial = new THREE.MeshStandardMaterial({
      color: 0x4a3728, // Brown accent
      roughness: 0.6,
      metalness: 0.2
    });

    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xb8925a, // Gold accent
      roughness: 0.3,
      metalness: 0.8
    });

    const darkMaterial = new THREE.MeshStandardMaterial({
      color: 0x2b2620, // Charcoal
      roughness: 0.7,
      metalness: 0.3
    });

    const glassMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.4
    });

    const waterMaterial = new THREE.MeshStandardMaterial({
      color: 0xd9be96, // Soft gold/beige glow for luxury feel
      roughness: 0.2,
      metalness: 0.7,
      transparent: true,
      opacity: 0.8
    });

    // --- CONSTRUCT PREMIUM VILLA ---
    
    // 1. Foundation Slab
    const baseGeo = new THREE.BoxGeometry(4.2, 0.15, 3.2);
    const baseMesh = new THREE.Mesh(baseGeo, darkMaterial);
    baseMesh.position.y = -0.5;
    baseMesh.receiveShadow = true;
    villaGroup.add(baseMesh);

    // 2. Ground Floor Block
    const groundGeo = new THREE.BoxGeometry(2.4, 1.1, 2.0);
    const groundMesh = new THREE.Mesh(groundGeo, wallMaterial);
    groundMesh.position.set(-0.5, 0.1, -0.2);
    groundMesh.castShadow = true;
    groundMesh.receiveShadow = true;
    villaGroup.add(groundMesh);

    // 3. Ground Floor Accent Wall (Wood Panel)
    const panelGeo = new THREE.BoxGeometry(0.1, 1.1, 1.6);
    const panelMesh = new THREE.Mesh(panelGeo, woodMaterial);
    panelMesh.position.set(0.72, 0.1, -0.2);
    panelMesh.castShadow = true;
    villaGroup.add(panelMesh);

    // 4. Large Floor-to-Ceiling Glass Window (Ground)
    const windowGeo = new THREE.BoxGeometry(1.2, 0.85, 0.05);
    const windowMesh = new THREE.Mesh(windowGeo, glassMaterial);
    windowMesh.position.set(-0.5, 0.05, 0.81);
    villaGroup.add(windowMesh);

    // 5. First Floor Block (Cantilevered over the ground floor)
    const firstGeo = new THREE.BoxGeometry(2.2, 1.0, 2.2);
    const firstMesh = new THREE.Mesh(firstGeo, wallMaterial);
    firstMesh.position.set(0.3, 1.15, 0.1);
    firstMesh.castShadow = true;
    firstMesh.receiveShadow = true;
    villaGroup.add(firstMesh);

    // 6. First Floor Gold Accent Cladding
    const claddingGeo = new THREE.BoxGeometry(0.8, 1.0, 0.05);
    const claddingMesh = new THREE.Mesh(claddingGeo, goldMaterial);
    claddingMesh.position.set(0.9, 1.15, 1.21);
    claddingMesh.castShadow = true;
    villaGroup.add(claddingMesh);

    // 7. Balcony Glass Railing
    const balconyGeo = new THREE.BoxGeometry(1.6, 0.4, 0.05);
    const balconyMesh = new THREE.Mesh(balconyGeo, glassMaterial);
    balconyMesh.position.set(-0.7, 0.85, 1.0);
    villaGroup.add(balconyMesh);

    // 8. Thin Roof Slab (Modern Flat Cantilever)
    const roofGeo = new THREE.BoxGeometry(3.6, 0.12, 2.8);
    const roofMesh = new THREE.Mesh(roofGeo, darkMaterial);
    roofMesh.position.set(0.1, 1.71, 0.1);
    roofMesh.castShadow = true;
    villaGroup.add(roofMesh);

    // 9. Supporting Wood Pillars
    const pillarGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.7, 8);
    const pillar1 = new THREE.Mesh(pillarGeo, woodMaterial);
    pillar1.position.set(-1.6, 0.35, 1.0);
    pillar1.castShadow = true;
    const pillar2 = pillar1.clone();
    pillar2.position.set(-1.6, 0.35, -1.0);
    villaGroup.add(pillar1);
    villaGroup.add(pillar2);

    // 10. Warm Interior Light Emitting Core
    const lightCoreGeo = new THREE.SphereGeometry(0.15, 16, 16);
    const lightCoreMat = new THREE.MeshBasicMaterial({
      color: 0xd9be96
    });
    const lightCore = new THREE.Mesh(lightCoreGeo, lightCoreMat);
    lightCore.position.set(0.3, 1.15, 0.6);
    villaGroup.add(lightCore);

    // --- CONSTRUCT DNA / SMART MATCH RING ---
    // Standard dashed ring
    const ringRadius = 4.0;
    const segmentsCount = 100;
    const ringGeo = new THREE.BufferGeometry();
    const positions = [];

    for (let i = 0; i <= segmentsCount; i++) {
      const theta = (i / segmentsCount) * Math.PI * 2;
      positions.push(Math.cos(theta) * ringRadius, 0, Math.sin(theta) * ringRadius);
    }
    
    ringGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const ringMat = new THREE.LineDashedMaterial({
      color: 0xb8925a,
      dashSize: 0.15,
      gapSize: 0.1,
      linewidth: 2
    });
    
    const ringLine = new THREE.Line(ringGeo, ringMat);
    ringLine.computeLineDistances(); // Required for dashed line rendering
    ringLine.rotation.x = Math.PI / 6; // Angle the ring
    dnaGroup.add(ringLine);

    // DNA Ring Core Sphere
    const coreGeo = new THREE.SphereGeometry(0.15, 16, 16);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xb8925a,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x4a3728
    });
    const coreSphere = new THREE.Mesh(coreGeo, coreMat);
    coreSphere.position.set(0, -0.5, 0);
    scene.add(coreSphere);

    // Orbiting nodes on the ring to represent "matches"
    const nodeCount = 3;
    const nodeMeshes = [];
    for (let i = 0; i < nodeCount; i++) {
      const nodeGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: 0x4c7a5c, // Success green node
        roughness: 0.2,
        metalness: 0.6
      });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      dnaGroup.add(node);
      nodeMeshes.push(node);
    }

    // Animation & State
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event) => {
      // Calculate normalized mouse positions
      const rect = renderer.domElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      mouseX = (x / rect.width) * 2 - 1;
      mouseY = -(y / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };
    
    window.addEventListener('resize', handleResize);

    // Animation loop
    let clock = new THREE.Clock();
    let animId = null;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Slow idle villa rotation
      villaGroup.rotation.y = elapsedTime * 0.15;
      
      // Rotate the DNA ring in reverse
      dnaGroup.rotation.y = -elapsedTime * 0.22;
      dnaGroup.rotation.z = Math.sin(elapsedTime * 0.3) * 0.1;

      // Animate orbiting nodes on the DNA ring
      nodeMeshes.forEach((node, index) => {
        const offset = (index / nodeCount) * Math.PI * 2;
        const angle = elapsedTime * 0.6 + offset;
        node.position.set(
          Math.cos(angle) * ringRadius,
          Math.sin(elapsedTime * 0.8 + offset) * 0.2, // Small wave movement
          Math.sin(angle) * ringRadius
        );
      });

      // Parallax effect from mouse position
      targetRotationY = mouseX * 0.3;
      targetRotationX = mouseY * 0.2;

      // Lerp rotation for smooth easing
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      
      // Dispose geometry/materials
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((mat) => mat.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
}
