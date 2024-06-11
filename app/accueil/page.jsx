'use client'
import Image from "next/image";
import React, {useEffect, useRef, useState} from 'react';
import styles from './accueil.module.scss';
import { useThree } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { ChromaticAberration, Bloom, EffectComposer } from '@react-three/postprocessing';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Spline from '@splinetool/react-spline/next';

export default function HomePage(){


    return(
        <>
            <div className={styles.homePage}>
                <h1>welcome to</h1>
                <Spline
                    scene="https://prod.spline.design/7GkFf3zmHys5cop5/scene.splinecode" 
                />
            </div>
        </>
    )
}