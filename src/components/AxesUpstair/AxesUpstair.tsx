import { Line } from '@react-three/drei'

const AxesUpstair = () => {
    return (
        <>
            {/* Ось X - красная */}
            <Line
                points={[
                    [0, 0, 0],
                    [100, 0, 0],
                ]}
                color='red'
                lineWidth={2}
            />
            {/* Ось Y - зеленая */}
            <Line
                points={[
                    [0, 0, 0],
                    [0, 100, 0],
                ]}
                color='green'
                lineWidth={2}
            />
            {/* Ось Z - синяя */}
            <Line
                points={[
                    [0, 0, 0],
                    [0, 0, 100],
                ]}
                color='blue'
                lineWidth={2}
            />
        </>
    )
}

export default AxesUpstair
