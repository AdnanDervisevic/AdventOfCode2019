import { input as OriginalInput } from './input'
import React from 'react'

let input = [...OriginalInput]

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

const findNumber = () => {
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            input = [...OriginalInput]

            input[1] = i
            input[2] = j

            input.forEach(intCodeComputer)

            if (input[0] === 19690720) return 100 * i + j
        }
    }

    console.table(input)
}

const intCodeComputer = (value: number, index: number) => {
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
            return
    }
}

const runComputer = () => {
    input.forEach(intCodeComputer)

    return input[0]
}

const App: React.FC = () => {
    return (
        <div>
            <span>Part 1: {runComputer()}</span>
            <br />
            <span>Part 2: {findNumber()}</span>
        </div>
    )
}

export default App
