import React from 'react'
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom'
import { Radio } from 'antd'
import 'antd/dist/antd.css';
import JoinPage from './JoinPage'
import HostPage from './HostPage'
import CollabPage from './CollabPage';

const NavBar = () => {
    return (
        <div className="routes">
            <BrowserRouter>
                <Radio.Group value="NOTE: MAKE THIS SET BY REDUX SINCE THE PAGE RELOADS EVERY TIME A SELECTION IS MADE"> 
                    <Link to="/join"><Radio.Button value="join">Join</Radio.Button></Link>
                    <Link to="/host"><Radio.Button value="host">Host</Radio.Button></Link>
                </Radio.Group>

                <Switch>
                    <Route path="/join" exact component={() => <JoinPage/>}></Route>
                    <Route path="/host" exact component={() => <HostPage/>}></Route>
                    <Route path="/test" exact component={() => <CollabPage/>}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default NavBar