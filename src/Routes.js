import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Blog from './Blog'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/blog" component={Blog} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
