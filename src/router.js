import React, { Component } from 'react';
import { HashRouter,Route,Switch } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Home from './pages/home'
import NoMatch from './pages/nomatch'
import Message from './pages/ui/message';
import Gallery from './pages/ui/gallery';
import FormLogin from './pages/form/login';
import FormRegister from './pages/form/register';
import LeaveMsg from './pages/leavemsg';
import About from './pages/about/About';


class Router extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/" render={()=><Admin>
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route path="/ui/messages" component={Message}/>
                                <Route path="/gallery" component={Gallery}/>
                                <Route path="/form/login" component={FormLogin}/>
                                <Route path="/form/reg" component={FormRegister}/>
                                <Route path="/leavemsg" component={LeaveMsg}/>
                                <Route path="/about" component={About}/>
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