import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Hooks, Home, ThirdParty } from './Route/index'

export default function App() {

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

