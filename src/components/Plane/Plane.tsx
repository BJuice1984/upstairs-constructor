import { usePlane } from '@react-three/cannon'

export default function Plane() {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -2, 0],
    }))
    return (
        //@ts-ignore
        <mesh ref={ref}>
            <planeGeometry args={[400, 400]} />
            <meshStandardMaterial color='lightgrey' />
        </mesh>
    )
}
