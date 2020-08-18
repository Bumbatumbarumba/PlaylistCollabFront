import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Input, Button, Spin } from 'antd'
import 'antd/dist/antd.css';
import { JoinRoom } from '../utils/HttpHelper'

const JoinPage = () => {
    const [hasText, setHasText] = useState(false)
    const [goToCollab, setGoToCollab] = useState(false)
    const [waitingForHttpResponse, setWaitingForHttpResponse] = useState(false)

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

    const enterRoom = () => {
        //call some function to validate room credentials
        //then set goToCollab to true
        setWaitingForHttpResponse(true)
        var res = JoinRoom(77777777)
        console.log(goToCollab)
        setGoToCollab(res)
        console.log(goToCollab)
    }

    return (
        <div>
            {!goToCollab ? 
                <div>
                    <h1>Join</h1>
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
                        <Button type="primary" disabled={!hasText && !waitingForHttpResponse} onClick={enterRoom}>Join Room</Button>
                    </form>
                    <Spin spinning={waitingForHttpResponse} tip="Connecting to room..."></Spin>
                </div>:
                <Redirect to="/collab"></Redirect>
            }
        </div>
    );
}

export default JoinPage