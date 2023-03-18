import React, {useRef} from "react";
import { OrbitControls, RenderTexture, Text} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import '../../styles/space.css';

function Space() {
    return (
        <div className='gap'> EYAWDHJKSA
        <Canvas>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
            <mesh>
                <boxGeometry args={[1,1,1]}/>
                <meshStandardMaterial color="red">
                </meshStandardMaterial>
            </mesh>
        </Canvas>
        </div>
    ) 
}

export default Space