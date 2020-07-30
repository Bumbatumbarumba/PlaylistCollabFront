import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Layout, Button } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';
import JoinPage from './JoinPage'
import HostPage from './HostPage'
import CollabPage from './collabpage/CollabPage';
import HomePage from './HomePage';
import '../css/routes.css'

const { Header, Content, Footer } = Layout

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Layout>
                    <Header>
                        <Link to="/" exact><Button type="default"><HomeOutlined/></Button></Link>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <div className="site-layout-content">
                            <Switch>
                                <Route path="/" exact component={() => <HomePage/>}></Route>
                                <Route path="/join" exact component={() => <JoinPage/>}></Route>
                                <Route path="/host" exact component={() => <HostPage/>}></Route>
                                <Route path="/collab" exact component={() => <CollabPage/>}></Route>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Bartosz Kosakowski, 2020
                    </Footer>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default Routes