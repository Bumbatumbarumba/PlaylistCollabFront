import React, { useState } from 'react'
import { Input, Button } from 'antd'
import 'antd/dist/antd.css';
import PageHeader from './Header'

const JoinPage = () => {
    const [hasText, setHasText] = useState(false)
    const [username, setUsername] = useState("")
    const [roomCode, setRoomCode] = useState("")
    const [roomPassword, setRoomPassword] = useState("")
    
    const onChange = (e, input) => {
        switch (input) {
            case "username":
                setUsername(e.target.value)
                break;
            case "roomcode":
                setRoomCode(e.target.value)
                break;
            case "roompassword":
                setRoomPassword(e.target.value)
                break;
            default:
                break;
        }

        setHasText(username && roomCode && roomPassword)
    }

    return (
        <div>
            <PageHeader></PageHeader>
            <form>
                <Input 
                    size="large"
                    placeholder="Username" 
                    value={username} 
                    onChange={e => onChange(e, "username")}/>
                <Input 
                    size="large" 
                    placeholder="Room code" 
                    value={roomCode} 
                    onChange={e => onChange(e, "roomcode")}/>
                <Input 
                    size="large" 
                    placeholder="Room Password" 
                    value={roomPassword} 
                    onChange={e => onChange(e, "roompassword")}/>
                <Button type="primary" disabled={!hasText}>Join Room</Button>
            </form>
        </div>
    );
}

export default JoinPage