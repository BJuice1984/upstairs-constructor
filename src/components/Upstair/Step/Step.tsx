import { useMemo } from 'react'
import * as THREE from 'three'

const Step = ({
    shapeVertices,
    thickness,
    position,
}: {
    shapeVertices: number[][]
    thickness: number
    position: [x: number, y: number, z: number]
}) => {
    const shape = useMemo(() => {
        const s = new THREE.Shape()
        s.moveTo(shapeVertices[0][0], shapeVertices[0][1])
        for (let i = 1; i < shapeVertices.length; i++) {
            s.lineTo(shapeVertices[i][0], shapeVertices[i][1])
        }
        s.lineTo(shapeVertices[0][0], shapeVertices[0][1])
        return s
    }, [shapeVertices])

    const extrudeSettings = {
        steps: 1,
        depth: thickness,
        bevelEnabled: false,
    }

    const geometry = useMemo(() => {
        return new THREE.ExtrudeGeometry(shape, extrudeSettings)
    }, [shape, extrudeSettings])

    const edgesGeometry = useMemo(() => {
        return new THREE.EdgesGeometry(geometry)
    }, [geometry])

    return (
        <group position={position}>
            <mesh geometry={geometry}>
                <meshStandardMaterial color='orange' />
            </mesh>
            <lineSegments geometry={edgesGeometry}>
                <lineBasicMaterial color='black' />
            </lineSegments>
        </group>
    )
}

export default Step
