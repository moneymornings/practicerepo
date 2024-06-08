import React from 'react'
import Minesweeper from './Minesweeper'

import Home from './Home'
import Jokes from './Jokes'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import PageTemplate from './PageTemplate'

export default function App() {
  return (
        <Router>
            <PageTemplate>
                <Switch>
                <Route path="/minesweeper" exact>
                        <Minesweeper />
                    </Route>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/jokes" exact>
                        <Jokes />
                    </Route>
                </Switch>
            </PageTemplate>       
        </Router>
  )
}
