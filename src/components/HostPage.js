import React, { useState } from 'react'
import { Input, Button, Tooltip } from 'antd'
import { QuestionCircleFilled } from '@ant-design/icons'
import 'antd/dist/antd.css';
import { Redirect } from 'react-router-dom'

const HostPage = (props) => {  
    const [goToCollab, setGoToCollab] = useState(false)
    const [hasText, setHasText] = useState(false)
    const [playlistTitle, setPlaylistTitle] = useState("")
    const [username, setUsername] = useState("")
    const [hostKey, setHostKey] = useState("")
    const [roomPassword, setRoomPassword] = useState("")
    
    const onChange = (e, input) => {
        switch (input) {
            case "playlist":
                setPlaylistTitle(e.target.value)
                break;
            case "username":
                setUsername(e.target.value)
                break;
            case "hostkey":
                setHostKey(e.target.value)
                break;
            case "roompassword":
                setRoomPassword(e.target.value)
                break;
            default:
                break;
        }
        setHasText(playlistTitle && username && hostKey)
    }

    return (
        <div>
            {!goToCollab ? 
                <div>
                    <h1>Host</h1>
                    <form>
                        <Input size="large"
                            value={playlistTitle}
                            placeholder="Playlist Name" 
                            onChange={e => onChange(e, "playlist")}></Input>
                        <Input size="large" 
                            value={username}
                            placeholder="Username" 
                            onChange={e => onChange(e, "username")}></Input>
                        <Input size="large" 
                            value={hostKey}
                            placeholder="Host Identifier Key" 
                            onChange={e => onChange(e, "hostkey")}></Input> <Tooltip title="This is required to identify yourself as host of this room. Keep it a secret!"><QuestionCircleFilled /></Tooltip>
                        <Input size="large" 
                            value={roomPassword}
                            placeholder="Room Password (Optional)" 
                            onChange={e => onChange(e, "roompassword")}></Input>
                        <Button type="primary" disabled={!hasText} onClick={() => setGoToCollab(!goToCollab)}>Host Room</Button>
                    </form>
                </div>:
            <Redirect to="/collab"></Redirect>
        }
        </div>
    );
}

export default HostPage