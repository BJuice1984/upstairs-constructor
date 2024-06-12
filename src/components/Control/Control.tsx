import { useState, ChangeEvent, useEffect } from 'react'
import './control.css'

const Control = ({
    onStepCountChange,
    onStepWidthChange,
}: {
    onStepCountChange: (count: number) => void
    onStepWidthChange: (count: number) => void
}) => {
    const [height, setHeight] = useState<string>('')
    const [width, setWidth] = useState<string>('')

    useEffect(() => {
        if (height.trim() === '') {
            onStepCountChange(0)
        } else {
            const parsedHeight = parseFloat(height)
            const calculatedStepCount = Math.ceil(parsedHeight / 120)
            onStepCountChange(calculatedStepCount)
        }
    }, [height, onStepCountChange])

    useEffect(() => {
        if (width.trim() === '') {
            onStepWidthChange(0)
        } else {
            const parsedWidth = parseFloat(width)
            const calculatedWidthCount = Math.ceil(parsedWidth / 10)
            onStepWidthChange(calculatedWidthCount)
        }
    }, [width, onStepWidthChange])

    const handleHeightChange = (event: ChangeEvent<HTMLInputElement>) => {
        setHeight(event.target.value)
    }

    const handleWidthChange = (event: ChangeEvent<HTMLInputElement>) => {
        setWidth(event.target.value)
    }

    return (
        <div className='form-container'>
            <label htmlFor='heightInput'>Введите высоту:</label>
            <input
                id='heightInput'
                type='number'
                min='0'
                value={height}
                onChange={handleHeightChange}
            />
            <label htmlFor='widthInput'>Введите ширину:</label>
            <input
                id='widthInput'
                type='number'
                min='0'
                value={width}
                onChange={handleWidthChange}
            />
        </div>
    )
}

export default Control
