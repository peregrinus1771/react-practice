import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Hooks, Home, ThirdParty } from './Route/index'
import styled, { createGlobalStyle } from 'styled-components'

export default function App() {
    // const numbers = [1, 2, 3, 4, 5]
    // const operators = ['+', '-', '*', '/']

    // const calculate = (prev: number, current: number, index: number) => {
    //     console.log(prev, current, index)
    //     console.log(operators[index])

    //     switch (operators[index]) {
    //         case '+':
    //             return prev + current
    //         case '-':
    //             return prev - current
    //         case '*':
    //             return prev * current
    //         case '/':
    //             if (current === 0) {
    //                 console.log('undefined: divided by zero')
    //                 break
    //             } else return prev / current
    //         default:
    //             console.log('You need to click operator')
    //     }
    // }

    // const formula = () => {
    //     return numbers.reduce((prev, current, index) => {
    //         return calculate(prev, current, index - 1)
    //     })
    // }
    // console.log(formula())

    return (
        <>
            <h1>React Router</h1>
            <button>Click here</button>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/hooks">Hooks</Link>
                            </li>
                            <li>
                                <Link to="/thirdParty">ThirdParty</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/thirdParty">
                            <ThirdParty />
                        </Route>
                        <Route path="/hooks">
                            <Hooks />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}

const GlobalStyle = createGlobalStyle`

// `
