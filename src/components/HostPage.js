import React, { useState } from 'react'
import { Input, Button } from 'antd'
import 'antd/dist/antd.css';
import { Redirect } from 'react-router-dom'
import PageHeader from './Header'

const HostPage = (props) => {  
    const [goToCollab, setGoToCollab] = useState(false)
    const [hasText, setHasText] = useState(false)
    
    const checkForText = (e) => {
        setHasText(e.target.value !== "")
    }

    return (
        <div>
            {!goToCollab ? 
                <div>
                    <PageHeader></PageHeader>
                    <form>
                        <Input size="large" placeholder="Playlist name" onChange={e => checkForText(e)}></Input>
                        <Button type="primary" disabled={!hasText} onClick={() => setGoToCollab(!goToCollab)}>Host Room</Button>
                    </form>
                </div>:
            <Redirect to="/test"></Redirect>
        }
        </div>
    );
}

export default HostPage