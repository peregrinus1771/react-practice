import React, { useState } from 'react'

export const Calculator = () => {
    const [numbers, setNumbers] = useState([])
    const [operators, setOperators] = useState([])
    const [currentNumber, setCurrentNumber] = useState('')
    const [currentOperator, setCurrentOperator] = useState('')
    const [operatorIsClicked, setOperatorIsClicked] = useState(false)

    console.log(numbers)
    console.log(operators)
    console.log(currentNumber)
    console.log(currentOperator)
    console.log(operatorIsClicked)

    const calculate = (prev: number, current: number, index: number) => {
        console.log(prev, current, index)
        console.log(operators[index])

        switch (operators[index]) {
            case '+':
                return prev + current
            case '-':
                return prev - current
            case '*':
                return prev * current
            case '/':
                if (current === 0) {
                    console.log('undefined: divided by zero')
                    break
                } else return prev / current
            default:
                console.log('You need to click operator')
        }
    }

    const formula = () => {
        return numbers.reduce((prev, current, index) => {
            return calculate(prev, current, index - 1)
        })
    }

    const addNumber = (inputNumber: number) => {
        if (operatorIsClicked === true) {
            if (numbers.length === 0) {
                setNumbers([Number(currentNumber), inputNumber])
            } else {
                setNumbers([...numbers, inputNumber])
            }
            console.log(numbers);

            const result = formula()
            console.log(numbers);
            console.log(result)

            setCurrentNumber(String(result))
            setOperatorIsClicked(false)
            setCurrentOperator('')
        } else {
            if (currentNumber.length === 0 || numbers.length !== 0) {
                setCurrentNumber(String(inputNumber))
            } else {
                if (Number(currentNumber) === 0) return
                setCurrentNumber(currentNumber + String(inputNumber))
            }
        }
    }

    const addOperator = (inputOperator: string) => {
        setOperatorIsClicked(true)
        setCurrentOperator(inputOperator)
        if (operators.length === 0) {
            setOperators([inputOperator])
        } else {
            setOperators([...operators, inputOperator])
        }
    }
    // const addEqual = () => {
    //     const showNumber = Number(currentNumber)
    //     setNumbers([...numbers, showNumber])
    //     const result = formula()
    //     setCurrentNumber(String(result))
    // }

    return (
        <>
            <div>
                {currentNumber}
                {currentOperator}
            </div>
            <div>
                <button onClick={() => addNumber(1)}>1</button>
                <button onClick={() => addNumber(2)}>2</button>
                <button onClick={() => addNumber(3)}>3</button>
                <button onClick={() => addNumber(4)}>4</button>
                <button onClick={() => addNumber(5)}>5</button>
                <button onClick={() => addNumber(6)}>6</button>
                <button onClick={() => addNumber(7)}>7</button>
                <button onClick={() => addNumber(8)}>8</button>
                <button onClick={() => addNumber(9)}>9</button>
                <button onClick={() => addNumber(0)}>0</button>
                <button onClick={() => addOperator('+')}>+</button>
                <button onClick={() => addOperator('-')}>-</button>
                <button onClick={() => addOperator('×')}>×</button>
                <button onClick={() => addOperator('÷')}>÷</button>
                {/* <button onClick={() => addEqual()}>=</button> */}
            </div>
        </>
    )
}
