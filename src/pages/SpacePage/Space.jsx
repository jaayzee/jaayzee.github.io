import React, {useRef} from "react";
import { OrbitControls, RenderTexture, Text} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import '../../styles/space.css';

function Space() {
    return (
        <div className='gap'>
            <div className='titleSpace'> TEMPORARY BIG CUBE </div>
                <div className='subheader'>Pls rotate it while I figure out something to put here :/ </div>
            <Canvas>
                <OrbitControls enableZoom={false} autoRotate/>
                <ambientLight intensity={1}/>
                <directionalLight position={[3,2,1]}/>
                <mesh>
                    <boxGeometry args={[2,2,2]}/>
                    <meshStandardMaterial color="#71739C">
                    </meshStandardMaterial>
                </mesh>
            </Canvas>
        </div>
    ) 
}

export default Space