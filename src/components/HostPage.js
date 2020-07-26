import React, { useState } from 'react'
import { Input, Button, Tooltip } from 'antd'
import { QuestionCircleFilled } from '@ant-design/icons'
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
                        <Input size="large" placeholder="Playlist Name" onChange={e => checkForText(e)}></Input>
                        <Input size="large" placeholder="Username" onChange={e => checkForText(e)}></Input>
                        <Input size="large" placeholder="Host Identifier Key" onChange={e => checkForText(e)}></Input> <Tooltip title="This is required to identify yourself as host of this room. Keep it a secret!"><QuestionCircleFilled /></Tooltip>
                        <Input size="large" placeholder="Room Password (Optional)" onChange={e => checkForText(e)}></Input>
                        <Button type="primary" disabled={!hasText} onClick={() => setGoToCollab(!goToCollab)}>Host Room</Button>
                    </form>
                </div>:
            <Redirect to="/collab"></Redirect>
        }
        </div>
    );
}

export default HostPage