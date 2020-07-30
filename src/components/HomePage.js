import React from 'react'
import { Link } from 'react-router-dom'
import { Radio } from 'antd'
import 'antd/dist/antd.css';

const HomePage = () => {
    return (
        <div>
            <h1>Playlist Collab</h1>
            <Radio.Group> 
                <Link to="/join"><Radio.Button value="join">Join</Radio.Button></Link>
                <Link to="/host"><Radio.Button value="host">Host</Radio.Button></Link>
            </Radio.Group>
        </div>
    );
}

export default HomePage