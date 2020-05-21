import React, { Component } from 'react';
import { HashRouter,Route,Switch,Redirect } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Home from './pages/home'
import Buttons from './pages/ui/button'
import NoMatch from './pages/nomatch'


class Router extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/" render={()=><Admin>
                            <Switch>
                                <Route path="/home" component={Home}/>
                                <Route path="/ui/buttons" component={Buttons}/>
                                <Route component={NoMatch}/>
                            </Switch>
                            </Admin>}
                        />
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}

export default Router;