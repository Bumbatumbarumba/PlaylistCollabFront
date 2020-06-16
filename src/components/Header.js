import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';

const PageHeader = () => {
    return (
        <div>
            <Link to="/" exact><Button type="default"><HomeOutlined/></Button></Link>
            <h1>Playlist Collab</h1>
        </div>
    );
}

export default PageHeader