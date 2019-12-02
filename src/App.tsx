import React from 'react'
import { input } from './input'

const getInstructionValue = (index: number) => input[input[index]]
const getAddress = (index: number) => input[index]

const handleMultiplication = (index: number) => {
    const product = getInstructionValue(index + 1) * getInstructionValue(index + 2)

    input[getAddress(index + 3)] = product
}

const handleAdd = (index: number) => {
    const sum = getInstructionValue(index + 1) + getInstructionValue(index + 2)

    input[getAddress(index + 3)] = sum
}

const handleOps = (value: number, index: number) => {
    if (index % 4 !== 0) {
        return
    }

    switch (value) {
        case 1:
            handleAdd(index)
            break
        case 2:
            handleMultiplication(index)
            break
        case 99:
            break
    }
}

const runComputer = () => {
    input.forEach(handleOps)

    console.table(input) /* Debug bby */

    return input[0]
}

const App: React.FC = () => {
    return <div>{runComputer()}</div>
}

export default App
