import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './App.css'
import Upstair from './components/Upstair/Upstair'
import Plane from './components/Plane/Plane'
import { Physics } from '@react-three/cannon'
import AxesUpstair from './components/AxesUpstair/AxesUpstair'
import Control from './components/Control/Control'
import { useState } from 'react'

function App() {
    const [stepCount, setStepCount] = useState(0)
    const [stepWidth, setStepWidth] = useState(0)

    const handleStepCountChange = (count: number) => {
        setStepCount(count)
    }

    const handleStepWidthChange = (count: number) => {
        setStepWidth(count)
    }

    return (
        <div className='App'>
            <Control
                onStepCountChange={handleStepCountChange}
                onStepWidthChange={handleStepWidthChange}
            />
            <Canvas camera={{ position: [200, 200, 200] }}>
                <Physics>
                    <OrbitControls />
                    <AxesUpstair />
                    <Upstair stepCount={stepCount} stepWidth={stepWidth} />
                    <Plane />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[1000, 1000, 1000]} />
                </Physics>
            </Canvas>
        </div>
    )
}

export default App
