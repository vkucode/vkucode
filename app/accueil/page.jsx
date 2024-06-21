'use client'
import styles from './accueil.module.scss'
import Spline from '@splinetool/react-spline/next';
import Image from 'next/image';
import Expertise from './components/Expertise';
import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function HomePage() {
    const model3d = "/models/logoVKU.glb";
    const [rotation, setRotation] = useState([0, 0, 0]);
    const [scale, setScale] = useState(4);  //0.07
    const [rotationSpeed, setRotationSpeed] = useState(0); // Viteza de rotație inițială
    const [positionY, setPositionY] = useState(0); // Poziția inițială pe axa Y
    const [positionX, setPositionX] = useState(0);
    const [positionZ, setPositionZ] = useState(0);

    const Model = ({ scale }) => {
        const modelRef = useRef();
        const textures = useLoader(TextureLoader, [
            "/models/vkucodelogo/texture1.jpg",
            "/models/vkucodelogo/texture2.jpg",
            "/models/vkucodelogo/texture3.jpg",
        ]);
        const model = useLoader(GLTFLoader, model3d);

        model.scene.traverse((child, index) => {
            if (child.isMesh) {
                const newMaterial = new THREE.MeshStandardMaterial({
                    map: textures[2], // Aplicați textura alternativ
                    metalness: 1.3,
                    roughness: 1,
                    transparent: false,
                    opacity: 1,
                    side: THREE.DoubleSide
                });
                child.material = newMaterial;
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        return <primitive ref={modelRef} object={model.scene} scale={scale} rotation={rotation} position={[positionX, positionY, positionZ]} />;
    };

    return (
        <>
            <section className={styles.homePage}>
                <div className={styles.background}></div>
                <div className={styles.headerPage}>
                    <h1>excellence</h1>
                    <h2>design&nbsp;studio</h2>
                    <Canvas className={styles.objetCanvas} style={{height: "50vh"}}>
                        <directionalLight position={[-35, 50, 300]} intensity={25} scale={2000} castShadow={true} color="#fff" />
                        <Model scale={scale} rotation={rotation} />
                    </Canvas>
                </div>
                <div className="h-screen relative flex flex-col justify-center items-center">
                    <h1>qui&nbsp;sommes nous</h1>
                    <p>Basée à PARIS , notre agence combine innovation, design et technologie pour offrir des solutions sur mesures à nos clients.</p>
                </div>
                <Expertise />
            </section>
        </>
    );
}
