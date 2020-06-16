import React from 'react'
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom'
import 'antd/dist/antd.css';
import JoinPage from './JoinPage'
import HostPage from './HostPage'
import CollabPage from './CollabPage';
import HomePage from './HomePage';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={() => <HomePage/>}></Route>
                    <Route path="/join" exact component={() => <JoinPage/>}></Route>
                    <Route path="/host" exact component={() => <HostPage/>}></Route>
                    <Route path="/test" exact component={() => <CollabPage/>}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Routes