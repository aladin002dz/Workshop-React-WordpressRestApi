import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Books from './Books';
import BookPage from './BookPage'

const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/"  component={Books} />
                <Route exact path="/book/:id" component={BookPage} />
            </Switch>
        </Router>
    )
}

export default AppRouter;