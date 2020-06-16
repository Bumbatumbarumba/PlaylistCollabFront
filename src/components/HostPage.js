import React, { useState } from 'react'
import { Input, Button } from 'antd'
import 'antd/dist/antd.css';
import { Redirect } from 'react-router-dom'

const HostPage = (props) => {  
    const [goToCollab, setGoToCollab] = useState(false)

    return (
        <div>
            {!goToCollab ? 
                <div>
                    <h3>Host Page</h3>
                    <form>
                        <Input size="large" placeholder="Playlist name"></Input>
                        <Button type="primary" onClick={() => setGoToCollab(!goToCollab)}>Host Room</Button>
                    </form>
                </div>:
            <Redirect to="/test"></Redirect>
        }
        </div>
    );
}

export default HostPage