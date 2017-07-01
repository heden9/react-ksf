import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../container/App';
import Home from '../container/Home';
import NotFound from '../container/404';
import LuckPage from '../container/luckPage';
export default class RouterMap extends React.PureComponent{
    render(){
        return (
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/luck' component={LuckPage} />
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
}