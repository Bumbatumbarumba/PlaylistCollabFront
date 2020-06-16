import React from 'react'
import { Link } from 'react-router-dom'
import { Radio } from 'antd'
import 'antd/dist/antd.css';
import PageHeader from './Header'

const HomePage = () => {
    return (
        <div>
            <PageHeader></PageHeader>
            <Radio.Group value="NOTE: MAKE THIS SET BY REDUX SINCE THE PAGE RELOADS EVERY TIME A SELECTION IS MADE"> 
                <Link to="/join"><Radio.Button value="join">Join</Radio.Button></Link>
                <Link to="/host"><Radio.Button value="host">Host</Radio.Button></Link>
            </Radio.Group>
        </div>
    );
}

export default HomePage