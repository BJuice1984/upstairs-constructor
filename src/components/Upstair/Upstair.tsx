import Step from './Step/Step'

export default function Upstair({
    stepCount,
    stepWidth,
}: {
    stepCount: number
    stepWidth: number
}) {
    const vertices = [
        [0, 0],
        [stepWidth, 0],
        [stepWidth, 2],
        [0, 2],
    ]

    const steps = []
    const stepThickness = 20
    const stepHeight = 12
    const stepSpacing = 2

    for (let i = 0; i < stepCount; i++) {
        steps.push(
            <Step
                key={i}
                shapeVertices={vertices}
                thickness={stepThickness}
                position={[0, i * (stepHeight + stepSpacing), -i * (stepThickness - stepSpacing)]}
            />
        )
    }

    return <>{steps}</>
}
